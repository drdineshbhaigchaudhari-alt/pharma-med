import nodemailer from 'nodemailer';

let transporterPromise;

// Uses real SMTP when SMTP_HOST is set, otherwise a throwaway Ethereal inbox
// so forms can be tested locally without sending real email.
function getTransporter() {
  if (!transporterPromise) {
    transporterPromise = (async () => {
      if (process.env.SMTP_HOST) {
        return nodemailer.createTransport({
          host: process.env.SMTP_HOST,
          port: Number(process.env.SMTP_PORT || 465),
          secure: process.env.SMTP_SECURE !== 'false',
          auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
        });
      }
      const account = await nodemailer.createTestAccount();
      console.log(`[mail] SMTP_HOST not set - using Ethereal test inbox (${account.user})`);
      return nodemailer.createTransport({
        host: account.smtp.host,
        port: account.smtp.port,
        secure: account.smtp.secure,
        auth: { user: account.user, pass: account.pass },
      });
    })();
  }
  return transporterPromise;
}

const escape = (v) =>
  String(v ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);

const label = (key) => key.replace(/([A-Z])/g, ' $1').replace(/^./, (c) => c.toUpperCase());

function layout(title, bodyHtml) {
  return `<!doctype html><html><body style="margin:0;background:#f4f7fa;font-family:Arial,sans-serif;color:#1f2937">
  <table width="100%" cellpadding="0" cellspacing="0"><tr><td align="center" style="padding:24px">
  <table width="600" cellpadding="0" cellspacing="0" style="background:#fff;border-radius:8px;overflow:hidden">
    <tr><td style="background:#0B3C5D;color:#fff;padding:20px 24px">
      <div style="font-size:20px;font-weight:bold">Pharma Med University</div>
      <div style="font-size:13px;opacity:.85">${escape(title)}</div>
    </td></tr>
    <tr><td style="padding:24px">${bodyHtml}</td></tr>
    <tr><td style="background:#f1f5f9;padding:16px 24px;font-size:12px;color:#64748b">
      Bata Gale Netaji Road, Ellisbridge, Ahmedabad, Gujarat 380006 · pharmameduniversity.com
    </td></tr>
  </table></td></tr></table></body></html>`;
}

function fieldsTable(fields) {
  const rows = Object.entries(fields)
    .filter(([, v]) => v !== undefined && v !== '')
    .map(
      ([k, v]) =>
        `<tr><td style="padding:8px;border:1px solid #e5e7eb;background:#f8fafc;font-weight:bold;width:40%">${escape(label(k))}</td>` +
        `<td style="padding:8px;border:1px solid #e5e7eb">${escape(v).replace(/\n/g, '<br>')}</td></tr>`
    )
    .join('');
  return `<table width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;font-size:14px">${rows}</table>`;
}

export async function sendSubmission({ type, fields, to: toOverride }) {
  const transporter = await getTransporter();
  const from = process.env.MAIL_FROM || 'Pharma Med University <info@pharmameduniversity.com>';
  const to = toOverride || process.env.ADMISSION_EMAIL || 'registrar@pharmameduniversity.com';

  const adminInfo = await transporter.sendMail({
    from,
    to,
    replyTo: fields.email,
    subject: `New ${type} - ${fields.name}${fields.program ? ` (${fields.program})` : ''}`,
    html: layout(`New ${type} received`, fieldsTable(fields)),
  });

  const ackInfo = await transporter.sendMail({
    from,
    to: fields.email,
    subject: `We received your ${type.toLowerCase()} - Pharma Med University`,
    html: layout(
      `Thank you for your ${type.toLowerCase()}`,
      `<p>Dear ${escape(fields.name)},</p>
       <p>Thank you for reaching out to Pharma Med University. Our team has received your ${escape(
         type.toLowerCase()
       )} and will contact you within 2 working days.</p>
       <p>For urgent queries email <b>registrar@pharmameduniversity.com</b> or call <b>+91 79 4000 1234</b> (Mon–Sat, 9:30 AM – 5:30 PM).</p>
       <p>Warm regards,<br>Pharma Med University, Ahmedabad</p>`
    ),
  });

  for (const info of [adminInfo, ackInfo]) {
    const preview = nodemailer.getTestMessageUrl(info);
    if (preview) console.log(`[mail] Preview: ${preview}`);
  }
}

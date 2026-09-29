# Pharma Med University — pharmameduniversity.com

Website for **Pharma Med University**, Bata Gale, Netaji Road, Ellisbridge, Ahmedabad, Gujarat 380006.

- **Front end:** React 18 + Vite + Tailwind CSS + React Router 7 (`client/`)
- **Back end:** Node + Express. It emails form submissions using Nodemailer (`server/`; its dependencies are in the root `package.json`)

## Run locally

```bash
npm run install:all      # installs the server (root) and client dependencies
npm run dev              # website on http://localhost:5173, API on http://localhost:5000
```

If `SMTP_HOST` isn't set, form emails go to a free **Ethereal** test inbox. The server console prints a "Preview:" link for each email.

## Deploy on Hostinger (Node.js web app)

1. In **hPanel**, go to **Websites → Add website → Node.js Apps**, then choose **Import Git repository** and connect this GitHub repository (branch `main`).
2. Build settings:
   | Setting | Value |
   |---|---|
   | Framework | Express (or Other) |
   | Node.js version | **20 or 22** (18 will NOT work) |
   | Root directory | `/` (repository root) |
   | Install | `npm install` (default) |
   | Build command | `npm run build` |
   | Start command / entry file | `npm start` / `server.js` |
3. Add **Environment variables** in the app's settings (see `server/.env.example`):
   ```
   SMTP_HOST=smtp.hostinger.com
   SMTP_PORT=465
   SMTP_SECURE=true
   SMTP_USER=info@pharmameduniversity.com
   SMTP_PASS=<password of the info@ mailbox>
   MAIL_FROM=Pharma Med University <info@pharmameduniversity.com>
   ADMISSION_EMAIL=registrar@pharmameduniversity.com
   CONTACT_EMAIL=info@pharmameduniversity.com
   CLIENT_ORIGIN=https://pharmameduniversity.com
   ```
   Hostinger sets `PORT` itself, so don't add it.
4. Deploy, then connect the domain `pharmameduniversity.com` to the app and turn on the free SSL certificate.
5. Every later `git push` to `main` can redeploy automatically, if auto-deploy is on.

**If you see "503 Service Unavailable":** the app isn't running. Open the app's **Logs** in hPanel and look for `[startup]` lines:
- no `[startup]` line at all means the build failed or Node is older than 20. Check the build log and the Node version.
- `build MISSING` means the Build command isn't `npm run build`.
- `Could not listen on port` means another app is using the port. Restart the app.

To run production mode on any other server: `npm install && npm run build && npm start`.

## Pages

Home, About, B.Pharm / M.Pharm / Pharm.D / D.Pharm (one template), Admissions & Aid, Campus Life, Research & Ph.D, Placements, Contact, Enquire Now, Apply Online, 404.

## Where to edit content

| What | File |
|---|---|
| Name, address, phones, emails, stats, approvals, menu, notices | `client/src/data/site.js` |
| Programme details: seats, dates, fees, eligibility, syllabus, FAQs | `client/src/data/programs.js` |
| Images | `client/src/data/images.js` + `IMAGES.md` |
| Email templates | `server/mail.js` |
| Form validation (server side) | `server/routes/forms.js` |

## ⚠️ Confirm before going live

All text is original, AI-written copy. These values are **placeholders** and must be checked by the university:

- Phone numbers, email addresses and the founding year (2009)
- Intake, seat matrix, fees, important dates and scholarship amounts
- Approval and accreditation claims (PCI, AICTE, NAAC A+, NBA, UGC, GSIRF). **Show only the ones you actually hold.**
- Statistics (students, faculty, placement %, packages, publications, patents)
- Recruiter names on Home and Placements. List only companies that have actually hired your students.
- Student testimonials on Home (sample text with sample names). Replace them with real, consented quotes.
- The Google Maps pin (it currently searches for "Netaji Road, Ellisbridge").

## Logo files

Original logo: `client/public/brand/pmu-logo-full.png` (round seal, transparent outside the circle).

Brand colours (from the seal, set in `client/tailwind.config.js`): forest green `#012817` / `#063A23`, gold `#DFA83E`, leaf green `#5AA832`.

| File | Use |
|---|---|
| `brand/pmu-logo-full.png` | Full seal, 1186×1186: print, prospectus, social media |
| `brand/pmu-logo-480.png` | Medium size for documents and slides |
| `brand/pmu-logo-72.png`, `pmu-logo-144.png` | Website header and footer (normal and retina screens) |
| `brand/pmu-crest-512.png` | Seal on white, square: profile pictures and app icons |
| `favicon.ico`, `apple-touch-icon.png` | Browser tab and phone home-screen icon (made from the seal) |

All files are in `client/public/`. The logo is shown by `client/src/components/layout/Logo.jsx`.

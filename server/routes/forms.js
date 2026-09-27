import { Router } from 'express';
import { body, matchedData, validationResult } from 'express-validator';
import { sendSubmission } from '../mail.js';

const router = Router();

const PROGRAMS = ['B.Pharm', 'M.Pharm', 'Pharm.D', 'D.Pharm', 'Ph.D'];

const common = [
  body('name').trim().isLength({ min: 2, max: 80 }).withMessage('Please enter your full name'),
  body('email').trim().isEmail().withMessage('Please enter a valid email').normalizeEmail(),
  body('phone')
    .trim()
    .matches(/^(\+91[\s-]?)?[6-9]\d{9}$/)
    .withMessage('Please enter a valid 10-digit Indian mobile number'),
];

const rules = {
  enquiry: [
    ...common,
    body('program').isIn(PROGRAMS).withMessage('Please select a program'),
    body('city').optional({ values: 'falsy' }).trim().isLength({ max: 60 }),
    body('message').optional({ values: 'falsy' }).trim().isLength({ max: 1000 }),
  ],
  apply: [
    ...common,
    body('program').isIn(PROGRAMS).withMessage('Please select a program'),
    body('category').isIn(['ACPC', 'Management', 'NRI', 'NRI-Sponsored', 'International']).withMessage('Please select a category'),
    body('dob').isISO8601().withMessage('Please enter your date of birth'),
    body('gender').isIn(['Female', 'Male', 'Other']).withMessage('Please select gender'),
    body('board').trim().isLength({ min: 2, max: 80 }).withMessage('Please enter your board / university'),
    body('percentage').isFloat({ min: 0, max: 100 }).withMessage('Enter percentage between 0 and 100'),
    body('entranceExam').optional({ values: 'falsy' }).trim().isLength({ max: 40 }),
    body('entranceScore').optional({ values: 'falsy' }).trim().isLength({ max: 20 }),
    body('city').trim().isLength({ min: 2, max: 60 }).withMessage('Please enter your city'),
    body('state').trim().isLength({ min: 2, max: 60 }).withMessage('Please enter your state'),
    body('guardianName').optional({ values: 'falsy' }).trim().isLength({ max: 80 }),
  ],
  contact: [
    ...common,
    body('subject').trim().isLength({ min: 3, max: 120 }).withMessage('Please enter a subject'),
    body('message').trim().isLength({ min: 10, max: 2000 }).withMessage('Message should be at least 10 characters'),
  ],
};

const titles = { enquiry: 'Admission Enquiry', apply: 'Online Application', contact: 'Contact Message' };

for (const [type, validators] of Object.entries(rules)) {
  router.post(`/${type}`, validators, async (req, res) => {
    // Honeypot: real users never fill the hidden "website" field.
    if (req.body.website) return res.json({ ok: true });

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ ok: false, errors: errors.array().map((e) => ({ field: e.path, message: e.msg })) });
    }

    const fields = matchedData(req, { includeOptionals: true });

    try {
      const to = type === 'contact' ? process.env.CONTACT_EMAIL || 'info@pharmameduniversity.com' : undefined;
      await sendSubmission({ type: titles[type], fields, to });
      res.json({ ok: true });
    } catch (err) {
      console.error(`[${type}] mail failed:`, err.message);
      res.status(502).json({ ok: false, message: 'We could not send your request right now. Please call us or try again later.' });
    }
  });
}

export default router;

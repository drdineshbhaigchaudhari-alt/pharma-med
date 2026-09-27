import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import rateLimit from 'express-rate-limit';
import path from 'node:path';
import fs from 'node:fs';
import { fileURLToPath } from 'node:url';
import formsRouter from './routes/forms.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Load server/.env when present (local runs). On Hostinger, set these in hPanel → Environment variables instead.
const envFile = path.join(__dirname, '.env');
if (fs.existsSync(envFile) && typeof process.loadEnvFile === 'function') process.loadEnvFile(envFile);

const app = express();
const PORT = process.env.PORT || 5000;

app.set('trust proxy', 1);
app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        ...helmet.contentSecurityPolicy.getDefaultDirectives(),
        'img-src': ["'self'", 'data:', 'https:'],
        'frame-src': ["'self'", 'https://www.google.com', 'https://maps.google.com'],
        'font-src': ["'self'", 'https://fonts.gstatic.com'],
        'style-src': ["'self'", "'unsafe-inline'", 'https://fonts.googleapis.com'],
      },
    },
  })
);
app.use(cors({ origin: process.env.CLIENT_ORIGIN || 'http://localhost:5173' }));
app.use(express.json({ limit: '50kb' }));

app.get('/api/health', (_req, res) => res.json({ ok: true }));
app.use(
  '/api',
  rateLimit({ windowMs: 15 * 60 * 1000, limit: 10, standardHeaders: 'draft-7', legacyHeaders: false, message: { ok: false, message: 'Too many submissions. Please try again after some time.' } }),
  formsRouter
);

// Serve the React build in production (npm run build)
const dist = path.resolve(__dirname, '../client/dist');
const hasBuild = fs.existsSync(path.join(dist, 'index.html'));
if (hasBuild) {
  app.use(express.static(dist, { maxAge: '7d', index: false }));
  app.get(/^\/(?!api\/).*/, (_req, res) => res.sendFile(path.join(dist, 'index.html')));
} else {
  app.get(/^\/(?!api\/).*/, (_req, res) =>
    res.status(503).send('Website build not found. Run "npm run build" (Hostinger: set Build command to npm run build) and redeploy.')
  );
}

console.log(`[startup] Node ${process.version}, PORT=${process.env.PORT ?? '(not set, using 5000)'}, build ${hasBuild ? 'found' : 'MISSING'} at ${dist}`);
app
  .listen(PORT, () => console.log(`[startup] Server running on port ${PORT}`))
  .on('error', (err) => {
    console.error('[startup] Could not listen on port', PORT, err);
    process.exit(1);
  });

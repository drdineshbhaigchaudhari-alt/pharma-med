// Entry file for Hostinger / any Node host: `node server.js`.
// Kept as CommonJS so it also works when the host loads the entry with require();
// it simply starts the ES-module server in ./server/index.js.
import('./server/index.js').catch((err) => {
  console.error('[startup] Failed to start server:', err);
  process.exit(1);
});

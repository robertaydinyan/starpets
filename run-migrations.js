const umzug = require('./umzug');

(async () => {
  try {
    console.log('Running migrations...');
    await umzug.up();
    console.log('Migrations completed.');
  } catch (err) {
    console.error('Migration failed:', err);
  }
})();

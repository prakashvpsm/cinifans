const next = require('next');

const dev = 'production';
const app = next({ dev });

app.prepare();
module.exports = app;

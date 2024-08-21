const htp = require('http');

const PORT = 1245;
const HOST = '127.0.0.1';

const app = htp.createServer();
app.on('request', (req, res) => {
  const message = 'Hello Holberton School!';
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.setHeader('X-Powered-By', 'NodeJS');
  res.setHeader('Content-Type', 'text/plain');
  res.statusCode = 200;
  res.sendDate = true;

  // HANDLING ALL ROUTES
  res.write(Buffer.from(message));
  res.end();
});
app.listen(PORT, HOST, () => {
  process.stdout.write(`Server running at http://${HOST}:${PORT}/`);
});

module.exports = app;

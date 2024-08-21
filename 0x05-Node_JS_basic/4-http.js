const htp = require('http');

const port = 1245;
const host = '127.0.0.1';
const app = htp.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  // HANDLING ALL ROUTES
  res.end('Hello Holberton School!');
});

app.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}/`);
});

module.exports = app;

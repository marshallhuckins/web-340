const http = require('http');
const url = require('url');

// TODO: Implement your server here

const server = http.createServer((req, res) => {
  // TODO: Implement your routes here
  const parsedUrl = url.parse(req.url, true);
  const pathname = parsedUrl.pathname;

  if (pathname === '/convert') {
    const pounds = parseFloat(parsedUrl.query.pounds);
    if (isNaN(pounds)) {
      res.writeHead(400, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Invalid or missing pounds parameter' }));
    } else {
      const kilograms = (pounds * 0.453592).toFixed(2);
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ pounds, kilograms }));
    }
  } else {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Route not found' }));
  }
});

if (process.env.NODE_ENV !== 'test') {
  server.listen(3000, () => {
    console.log('Server listening on port 3000');
  });
}

module.exports = server;
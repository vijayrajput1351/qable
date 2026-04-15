const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/error') {
    res.writeHead(500);
    res.end('Internal Server Error!');
  } else if (req.url === '/not-found') {
    res.writeHead(404);
    res.end('Not Found!');
  } else {
    res.writeHead(200);
    res.end('Hello from Middleware Node.js APM!');
  }
});

server.listen(3001, () => {
  console.log('Server running on port 3001');

  // Auto generate traffic after server starts
  const http2 = require('http');

  setTimeout(() => {
    // Success requests
    for (let i = 0; i < 5; i++) {
      http2.get('http://localhost:3001/', (res) => {
        console.log(`Success request: ${res.statusCode}`);
      });
    }

    // Error requests
    for (let i = 0; i < 5; i++) {
      http2.get('http://localhost:3001/error', (res) => {
        console.log(`Error request: ${res.statusCode}`);
      });
    }
  }, 3000);
});

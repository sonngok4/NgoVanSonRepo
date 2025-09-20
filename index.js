// Import module http
const http = require('http');

// Tạo server
const server = http.createServer((req, res) => {
  res.statusCode = 200; // Mã trạng thái OK
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World!\n');
});

// Cổng server lắng nghe
const PORT = 3000;

server.listen(PORT, () => {
  console.log(`Server đang chạy tại http://localhost:${PORT}`);
});

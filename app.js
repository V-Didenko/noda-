const http = require("http");
const fs = require("fs");
const hostname = "127.0.0.1";
const port = 3000;
const file = fs.readFileSync("public/index.html");
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.end(file);
});
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

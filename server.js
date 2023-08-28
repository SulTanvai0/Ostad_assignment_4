const http = require("node:http");
const fs = require("node:fs");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("This is Home Page");
  } else if (req.url === "/about") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("This is About Page");
  } else if (req.url === "/contact") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("This is Contact Page");
  } else if (req.url === "/file-write") {
    fs.writeFile('demo.txt', 'Hello World', (err) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end("File write Unsuccessfully");
      } else  {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("File write Successfully");
      }
    });
  } else {
    res.writeHead(404);
    res.end("Url not Found 404");
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

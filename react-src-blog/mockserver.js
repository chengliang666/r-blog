const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
  let content = '';
  res.writeHead(200, {
    'Content-Type': 'text/plain',
    'Access-Control-Allow-Origin': '*',
  });
  // console.log("URL--->",req.url)
  try {
    // eslint-disable-next-line no-path-concat
    content = fs.readFileSync(__dirname + req.url);
  } catch (e) {
    content = '';
  }
  res.write(content);
  res.end();
}).listen(8080);

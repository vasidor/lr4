const http = require("http");

http
  .createServer(function (request, response) {
    response.setHeader("Content-Type", "text/html");
    response.write("<!DOCTYPE html>");
    response.write('<html lang="ru">');
    response.write("<head>");
    response.write("<title>Hello Node.js</title>");
    response.write('<meta charset="utf-8" />');
    response.write("</head>");
    response.write("<body><h2>...</h2></body>");
    response.write("</html>");
    response.end();
  })
  .listen(3000);
"use stict";

var http = require("http");

http
  .createServer(function(req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write('<h1>URL er: "' + req.url + '"</h1>');
    let url = req.url;
    if (url == "/") {
      for (let i = 0; i != 5; i++) {
        //res.write("<h1>Hello World!</h1>");

        bloggInnlegg(res, i);
      }
    } else if (url == "/about") {
      about(res);
    } else {
      res.write("<h1>Ikke implementert</h1>");
    }
    //bloggInnlegg(res, i);

    res.end();
  })
  .listen(8080);

function about(res) {
  res.write("About this page");
}

function bloggInnlegg(res, i) {
  i++;
  res.write("<h1>Bloggpost " + i.toString() + "</h1>");
  res.write("<p>Ipsum lorem stadius fusilium perpetum</p>");
}

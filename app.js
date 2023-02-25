var http = require('http');
var fs = require("fs");

var server = http.createServer(function (request, response) {

    var url = request.url;

  

    if (url == '/style.css') {
        var css = fs.readFileSync("./style.css");
        response.writeHeader(200, { "Content-Type": "text/css" });
        response.write(css);
        response.end();
        return;
    }
    if (url =='/script.js' ){
        var javascript =fs.readFileSync ('./script.js');
        response.writeHeader (200, {"Content-Type":"text/javascript"});
        response.write(javascript);
        response.end();
        return;
    }
    var html = fs.readFileSync("./index.html");

    response.writeHeader(200, { "Content-Type": "text/html" });
    response.write(html);
    response.end();

});
server.listen(5000);

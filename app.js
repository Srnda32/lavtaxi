var http = require('http');
var fs = require("fs");

var server = http.createServer(function (request, response) {

    var url = request.url;

    console.log('URL: ', url);



    if (url == '/style.css') {
        var file = fs.readFileSync('.' + url);
        response.writeHeader(200, { "Content-Type": "text/css" });
        response.write(file);
        response.end();
        return;
    }
    if (url == '/script.js') {
        var file = fs.readFileSync('.' + url);
        response.writeHeader(200, { "Content-Type": "text/javascript" });
        response.write(file);
        response.end();
        return;
    }
    niz = [
        "png" ,
        "jpg" ,
        "ico" 
    ]
     var ext = url.split('.').pop()
     var check = niz.includes(ext)
    if (check == true) {
        var file = fs.readFileSync('.' + url);
        response.writeHeader(200, { "Content-Type": "image/jpg" });
        response.write(file);
        response.end();
        return;
    }


    var html = fs.readFileSync("./index.html");

    response.writeHeader(200, { "Content-Type": "text/html" });
    response.write(html);
    response.end();

});
server.listen(5000);

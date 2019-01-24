var express = require("express");
var app = express();
app.use("/",express.static("static"));
var server = app.listen(8088,function () {
    var port = server.address().port;
    console.log("open http://localhost:%s",port);
})
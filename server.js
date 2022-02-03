var express = require('express');
var app = express();
const PORT = 3000;

var middleware = {
    requireAuthentication: function (req, res, next) {
        console.log("Private route hit");
        next();
    },
    logger: function (req, res, next) {
        console.log("Request: ", + new Date() + ' ' + req.method + " ");
        next();
    }
}

app.use(middleware.logger);
app.get('/about', middleware.requireAuthentication, function (req, res) {
    res.send("About Us");
})
app.use(express.static(__dirname + "/public"))

app.listen(PORT, () => {
    console.log("Server is running on port " + PORT);
});
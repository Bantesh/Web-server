var express = require('express');
var middleware = require('./middleware');
var app = express();
const PORT = process.env.PORT || 3000;



app.use(middleware.logger);
app.get('/about', middleware.requireAuthentication, function (req, res) {
    res.send("About Us");
})
app.use(express.static(__dirname + "/public"))

app.listen(PORT, () => {
    console.log("Server is running on port " + PORT);
});
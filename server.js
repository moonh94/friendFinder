var express =require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./app/routing/apiRouting")(app);
require("./app/routing/htmlRoutes")(app);



app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });


app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "app/public/home.html"));

})

app.get("/survey", function(req, res){
  res.sendFile(path.join(__dirname, "./app/public/survey.html"));
})

// app.get("/api/friends", function(req, res) {
//   res.json()
// }


const express = require('express');
const bodyParser = require('body-parser');
 
const app = express();

app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static("public"));

let items = ["Buy Commodites"];

app.set('view engine', 'ejs');

app.get("/", function(req, res){
  let options = { 
    weekday: 'long', 
    month: 'long', 
    day: 'numeric' 
  };
  let today  = new Date();
  let day = today.toLocaleDateString("en-US", options);
  res.render("list", {kindofDay: day, listItems: items});
});

app.post("/", function(req, res){
  let item = req.body.newitem;
  items.push(item);
});

app.listen(3000, function () {
  console.log("Server running on 3000");
});


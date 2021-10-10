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

//   var date = new Date()
//   var dayIndex = date.getDay()
//   const dayList = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
//   var day = dayList[dayIndex]
 
//   res.render("list", {kindofDay: day});
// });

  // switch(currentDay){
  //   case 0:
  //     day = "Sunday";
  //     break;
  //   case 1:
  //     day = "Monday";
  //     break;
  //   case 2:
  //     day = "Tueday";
  //     break;
  //   case 3:
  //     day = "Wednesday";
  //     break;
  //   case 4:
  //     day = "Thyrday";
  //     break;
  //   case 5:
  //     day = "Friday";
  //     break;
  //   case 6:
  //     day = "Saturday";
  //     break;
  // }

//   res.render("list", {kindofDay:day});

// });
 
// mailchimp api key 
// 80762c085eca48f37d32761a1ac076d1-us5

// List ID
// a8dffc8998
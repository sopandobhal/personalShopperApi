var express = require("express");
var bodyParser = require("body-parser");

var app = express();
app.use(bodyParser.json());

var grocery = [];

function createNewItem(itemName,itemQty) {
	this.id = grocery.length;
	this.name = itemName;
	this.qty = itemQty;
}

function addNewItem(item){
	var numOfItems = grocery.length;
	grocery[numOfItems] = item;
}

app.get("/grocery", function (req,res) {
	res.json(grocery)
});

app.post("/grocery", function (req,res) {
	// if (req.body.list == null) 
 //      res.json({"post":"success"})	
 //    else
 //    	res.json(req.body)
     var item = new createNewItem(req.body.item.name, req.body.item.qty);
     addNewItem(item);
     res.json(item);
});

app.delete("/grocery/")

app.listen(3000);
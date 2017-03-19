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

function getDeleteableItem(id) {
	var deleteableItem=null;
	for (var i = grocery.length - 1; i >= 0; i--) {
		if(grocery[i].id == id)
			deleteableItem = grocery[i];
	}
	return deleteableItem;
}

function removeItem(item) {
	var index = grocery.indexOf(item);

	if (index>-1)
       grocery.splice(index,1);
}

app.get("/grocery", function (req,res) {
	console.log("GET REQUEST");
	console.log(grocery);
	res.json(grocery)
});

app.post("/grocery", function (req,res) {
     var item = new createNewItem(req.body.item.name, req.body.item.qty);
     addNewItem(item);
     console.log("POST REQUEST");
     console.log(item);
     res.json(item);
});

app.delete("/grocery/:id", function function_name(req, res) {
	var id = req.params.id;
	var item = getDeleteableItem(id);
	console.log("DELETE REQUEST");

	if (item == null){
		console.log("Item not found!!");
		res.send("Item not found!!");
	}
	else{
		removeItem(item);
		console.log(item);
        res.json(item);
	}
});

app.listen(3000);
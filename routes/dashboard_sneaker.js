const express = require("express"); // import express in this module
const router = new express.Router(); // create an app sub-module (router)
const Sneaker = require("../models/Sneaker");
const User = require("../models/User");
const Tag = require("../models/Tag");


//router('/home', function (req, res, next) {
//	res.redirect('index.hbs');
//});

router.get("/collection", async (req, res, next) => {
	try {
		const data = await Sneaker.find();
		
		res.send("test");
	}  catch (err) {
		console.log("error");
		next(err);
	}
console.log("DATA", data);
});



module.exports = router;

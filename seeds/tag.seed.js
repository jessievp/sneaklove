require("dotenv/config");
const mongoose = require("mongoose");


const Tag = require("../models/Tag");

const tags = [

	{ label: "running"},
	{ label: "casual"},
];

mongoose
	.connect(process.env.MONGO_URI, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useCreateIndex: true,
	})

	.then(() => {
		Tag.create(tags)
			.then((createdTags) => {
				console.log(createdTags.length);
			})

			.catch((error) => {
				console.log(error);
			});
	})
	.catch((error) => {
		console.log(error);
	});
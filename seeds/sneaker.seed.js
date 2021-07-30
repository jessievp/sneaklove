require("dotenv/config");
const mongoose = require("mongoose");
const Sneaker = require("../models/Sneaker");


const sneakers = [
  {
    name: "Converse",
    ref: "C456",
    size: 38,
    description: "white shoes for everyday use",
    price: 99,
    category: "women",
  },
  {
    name: "Vans",
    ref: "V302",
    size: 45,
    description: "black skater shoes for street wear",
    price: 70,
    category: "men",
  },
  {
    name: "Nike",
    ref: "N991",
    size: 28,
    description: "toddler first shoes",
    price: 53,
    category: "kids",
  },
];


//async function insertSneakers() {
//  try {
//    await Sneaker.deleteMany(); // empty the styles db collection
//    const insertedSneaker = await Sneaker.insertMany(sneakers); // insert docs in db
//    console.log(
//      `seed sneakers done : ${insertedSneaker.length} documents inserted !`
//    );
//  } catch (err) {
//    console.error(err);
//  }
//}
//​
//insertSneakers();

mongoose
	.connect(process.env.MONGO_URI, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useCreateIndex: true,
	})

	.then(() => {
		Sneaker.create(sneakers)
			.then((createdDocs) => {
				console.log(createdDocs.length);
			})

			.catch((error) => {
				console.log(error);
			});
	})
	.catch((error) => {
		console.log(error);
	});

require("dotenv/config");
const mongoose = require("mongoose");
//Connect
const User = require("../models/User");


const users = [
	{
	name: "Olivier",
	lastname: "Akesso",
	email: "olivier@gmail.com",
	password: "1234",
	},
	{
	name: "Tobineau",
	lastname: "Suchaud",
	email: "tobineau@gmail.com",
	password: "3333",
	},
	{
	name: "Jess",
	lastname: "Sucha",
	email: "haha@gmail.com",
	password: "1111",
	},

];


mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("connected", () => {
  User.create(users)
    .then((usersCreated) => console.log(usersCreated.length))
    .catch((error) => console.log(error));
  console.log("yay mongodb connected :)");
});

mongoose.connection.on("error", () =>
  console.log("nay db connection error :(")
);

const express = require("express");
const router = express.Router();

//console.log(`\n\n
//-----------------------------
//-----------------------------
//     wax on / wax off !
//-----------------------------
//-----------------------------\n\n`
//);


router.get("/", (req, res) => {
  res.render("index.hbs");
});

router.get("/home", (req, res) => {
  res.render("index.hbs");
});

//router.get("/collection", (req, res) => 
//res.render("products.hbs"))

router.get("/sneakers/:cat", (req, res) => {
  res.render("products.hbs");
});

router.get("/one-product/:id", (req, res) => {
  res.render("one_product.hbs");
});

router.get("/signup", (req, res) => {
  res.render("singup.hbs");
});

router.get("/signin", (req, res) => {
  res.render("signin.hbs");
});



module.exports = router;

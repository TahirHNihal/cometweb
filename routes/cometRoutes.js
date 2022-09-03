const express = require("express");
const path = require("path");
const {
  homePage,
  aboutPage,
  shopPage,
  singleProductPage,
  ContactPage,
} = require("../controllers/cometControllers");

//Init Router
const router = express.Router();

//Routes
router.get("/", homePage);
router.get("/about", aboutPage);
router.get("/shop", shopPage);
router.get("/single-product/:id", singleProductPage);
router.get("/contact", ContactPage);

//Export Modules
module.exports = router;

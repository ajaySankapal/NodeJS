const express = require("express");
const path = require("path");
const rootDir = require("../util/path");
const router = express.Router();

const productsController = require("../controllers/products");

const adminRoutes = require("./admin");

router.get("/", productsController.getProducts);

// (req, res, next) => {
//   ///if the path is started with '/' it will show this page, it does not have to be exactly '/' if it start with '/' it will show this page
//   // console.log(adminData.products);
//   //   res.send("<h1>Hello from express js!</h1>"); //response.send
//   // res.sendFile(path.join(rootDir, "views", "shop.html"));

//   //we use diffrent render method
//   const products = adminData.products;
//   res.render("shop", {
//     prods: products,
//     pageTitle: "Shop",
//     path: "/",
//     hasProducts: products.length > 0,
//     activeShop: true,
//     productCSS: true,
//   });
// };

module.exports = router;

//outputing dynamic data;
// we can pass the data in res.render() we want to diplay in the views

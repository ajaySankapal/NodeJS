const express = require("express");

const router = express.Router();

router.get("/", (req, res, next) => {
  ///if the path is started with '/' it will show this page, it does not have to be exactly '/' if it start with '/' it will show this page
  console.log("In the other middleware");
  res.send("<h1>Hello from express js!</h1>"); //response.send
});

module.exports = router;

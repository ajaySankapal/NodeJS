const express = require("express");
const http = require("http");
const bodyParser = require("body-parser");
const app = express();
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
//first middleware
//request(object),response(object), next
// app.use((req, res, next) => {
//   console.log("In the middleware");
//   next(); //allows request to continue to the next middleware in the line
// });

app.use(bodyParser.urlencoded({ extended: false }));

//second middleware
app.use(adminRoutes);
app.use(shopRoutes);

//404 error page
app.use((req, res, next) => {
  res.status(404).send("<h1>Page not found :(</h1>");
});

// const server = http.createServer(app);

// server.listen(3000);  //alternative to this two lines
app.listen(3000);

//express js
//express js is a framework
//Framework - Helper functions, tools & rules that help you build your application

//Express js is all about middle ware
//      Request
//         |
//        \|/
//    Middleware     (req,res,next) => {...}
//         |
//        \|/        next()
//    Middleware     (req,res,next) => {...}
//         |
//        \|/        res.send()
//      Response
//         |
//        \|/

//express is all about middleware
// we can use that by app.use() - this use method allow us to use middleware in our app->this method take on function which will take place with every incoming request, this function will also take three arguements - app.use((req,res,next)={
//next here is the function which will call the next middleware
// })

// 1. app.use((req,res,next)=>{
// console.log('in the middleware');
// next();   this function invokation is very important if we want to run the next middleware
// })

// 2. app.use((req,res,next)=>{
// console.log('in the another middleware');   this will not be called unless we call next function in the first middleware
// })

//handling diffrent routes
//format of app.use()  //we can use differente overloads
//app.use('/path',(first callback),(second callback),...)  //if the path is started with '/' it will show this page only

//parsing incoming request
//by default incoming request does not parsed, we use a package called body parser to parse the incoming request

//express router

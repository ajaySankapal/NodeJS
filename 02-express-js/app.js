const express = require("express");

const http = require("http");
const bodyParser = require("body-parser");

const app = express();

app.set("view engine", "pug");
app.set("views", "views");

const adminData = require("./routes/admin");
const shopRoutes = require("./routes/shop");

const path = require("path");
//first middleware
//request(object),response(object), next
// app.use((req, res, next) => {
//   console.log("In the middleware");
//   next(); //allows request to continue to the next middleware in the line
// });

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
//second middleware
app.use("/admin", adminData.routes);
app.use(shopRoutes);

//404 error page
app.use((req, res, next) => {
  // res.status(404).send("<h1>Page not found :(</h1>");
  // res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
  res.status(404).render("404", { pageTitle: "page not found" });
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
//->you can easily add them by calling use()
//-> middleware function handle a request and should call next() to forward the request to the next function in line or send a response.
//-> we can use that by app.use() - this use method allow us to use middleware in our app->this method take on function which will take place with every incoming request, this function will also take three arguements - app.use((req,res,next)={
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

//express routing
//-> you can filter requests by path and method.
//-> if you filter method,paths are matched exactly otherwise, the first segment of a url is matched.
//-> you can use the express.Router to split your routes across files elgantely
//to minimize the complexity of the app we make folders of the routes pages
//and import that in our app

//adding and serving html pages
//add html pages
//instead of using res.send() we want to send the html file so we use res.sendFile('path')
//res.sendFile('/views/shop.html') it will not show our page, becuase / in express does not mean the folder it means the root path
//for this we use core module 'path'
// res.sendFile(path.join(__dirname,'../','views','shop.html'))
//-> you are not limited to srving dummy text as  a response
//-> you can sendFile()s to your users - eg HTML files
//-> if  a request is directly made for a file(e.g. a .css file is requested), you can enable static serving for such files via express.static()

//using a helper function for navigation
// instead of '../' we can use '..'

//templating engines
//used to diplay the dynamic templates
//EJS <p><% = name %> </p>
//->use normal html and plain Javascript in your templates

//Pug(Jade) p # {name}
//->use minimal HTML and custom temlate language

//Handlebars <p> {{name}} </p>
//-> use normal HTML and custom template language

// app.set() view-engine we tell the browser to diplay the dynamic templating data use this engine

//adding layouts - we are repeating some codes again and again
//what if we make a layout of it and use it dynamically for different pages
//we make a base layout and can extend that layout to use in other files, actually define some placeholder or hooks that other views can enter their content
//like for styles we can write "block styles" in head section so by this we can add other styles for other views

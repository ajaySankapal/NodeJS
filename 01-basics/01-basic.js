//basics of nodeJS
//how do you run js?
//-> yes i can run it in the browser
//in the browser the thing that running js is not your computer it is engine the v8 engine which is responsible for running the js

//but can we run js outside the browser ? how we run js outside the browser?
//so can we use this engine but without the browser
//JavaScript engine : a js engine is a computer program that executes the js code.
//v8 spider monkey javascript core

//nodejs allows us to run javascript on the server
//nodejs uses v8 engine and add some cool features with it, like to access your file system(opening file, reading file, deleting file) we can do this in the browser, so this feature is provided by node

//1995 netscape browser gives us js Renden nyke used to work there developed js
//2008 google annouced chrome browser
//2009 ryan dahl come up with nodejs
//the idea was simple to run js outside the browser with the help of v8 engine

//what is javascript runtime
//node is not a programming language not a framework it is a javascript runtime
//you can think of it as a environment which allow us to run js as well as do some extra work.
//it has v8 engine . in order for it to do lot more than just reading the js, it might wanna do difff things may be read file, access databases, may be just run sth that aren't part of the js. that's where the libuv comes in
//nodejs in simplified form is simply a way for us to give a js file to the nodejs runtime it is going to go through the v8 engine to read the js and any time it see something that it isn't part of the js it communicate with this libuv  library

//console.log() is not part of the js it is just the browser that allows us to do. web specific

//when we write code in nodejs REPL comes in the picture
//"R" read, "E" evaluate "P" print "L" loop
//when we close the repl and once again try to access the var's we lost access to them

//node vs javascript
//node is a runtime env made arround v8 engine to run the js outside the browser.
//javascript is a programming language which runs on the browsers
//in browser there is this "window api"
//we have window in browser and global in nodejs
//window : document,history,location,navigator
//global : process, module, __filename,require()

//we use node to create servers, to build web and mobile applications that connect to databases, provide user data,like photos and videos, server also provide security features like authentication (login/signUP)

//client make request for a web page to the server, server then provide the data to the client
//the language used to communicate b/w the client and the server is "http" hyper text transfer protocol. http is used to transfer these files from server to the browser (https is the secured version of this protocol)

//what does nodejs do?
//the browser v8 engine can only run js program. But with the help of node we can perfom some other functions also.
//nodejs contains v8 engine and also the nodejs api's with the help of this we can read fs,can make http request,look up the path in our computers, crypto functionality,,by encrypting the code
//v8 engine and libuv is the most important part of the nodejs
//libuv is built by C language it handles the input and output task that node can delegate to other parts of the our OS. Asynchrounous I/O

//asynchronous

function findMeaning() {
  return 42;
}
console.log(findMeaning());

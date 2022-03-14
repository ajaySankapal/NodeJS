//basics of nodeJS
//how do you run js?
//-> yes i can run it in the browser
//in the browser the thing that running js is not your computer it is engine the v8 engine which is responsible for running the js

//but can we run js outside the browser ? how we run js outside the browser?
//so can we use this engine but without the browser
//JavaScript engine : a js engine is a computer program that executes the js code.
//v8 spider monkey javascript core

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

function findMeaning() {
  return 42;
}
console.log(findMeaning());

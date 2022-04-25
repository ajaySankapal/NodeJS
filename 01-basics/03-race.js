//asynchrounous

//non-blocking function: setTimeout() is non-blocking function it does not block the main thread of the function, it runs in the background

//javascript is a synchrounous language. it will execute the code line by line
//we can write the asynchrounous javascript code, callback functions setTimeout is not the part of the js it is provided by browsers in window object and by nodejs in global

//javascript is a synchronous single threaded language

//setTimeout is not part of the js it is web api and in case of node it is provided by node
//how node is achieving this asynchrounous behavior without multithread?
//all of over js code is runs in main thread, and if there is any asynchrounous function it is executed in the event loop. even loop is written in libuv(library)
//event loop - processing all your asynchrounous callbacks until node is ready to exit, when there is no more code to execute

//when there is any asynchrounous code to execute it sends off to execute in background. this operation is executed in our operating system or thread pool, and when that function is finish executing and the result is ready node places any callback function that it needs to run for this operation in a queue. for example for setTimeout function if the timer is finished in the setTimeout node send the callback function that to be executed after that timer in queue(call back queue)
setTimeout(() => console.log("🐇 finishes!"), 2000);

console.log("🐢 finishes!");

//create server
const http = require("http");
const fs = require("fs");
const routes = require("./routes");
//req - is a object nodejs generated for us with all the data of the incoming request when we visited localhost3000
const server = http.createServer(routes);

server.listen(3000);

//stream and buffers
//stream - ongoing process, the request is simply read by node in chunks.
//buffer - a buffer is like bus stop, a construct which allows you to hold multiple chunks and work with them before they are released once you are done and you work with that buffer. Now thats pretty abstract but its pretty easy to work

//writeFileSync - the sync here stands for synchrounous it will block the execution until this file is created

//the event loop only handle the callbacks that contain fast finishing code
//instead our file system operation and a couple of other long taking operations are sent to a worker pool which is also spun up and managed by nodejs automatically. this worker pool is responsible for all the heavy lifting.
//this worker pool is kind of totally detached of your javascript code you could say and it runs on different threads. once the worker is done, so for example once we read a file, it will trigger the callback for that read file operation and since the event loop is responsible for the events and the callbacks this will in the end end up in the event loop

//the event loop execute the code or do the process in four phases
//1.-> timer - execute setTimeout, setInterval callbacks
//2.-> pending callbacks - execute I/O -related Callback that were deffered(file operation, blocking long taking operation)
//3.-> poll - a phase where nodejs will look for new IO events, and basically do its best to execute their callbacks immediately if possible
//4-> check - setImmediate callback will be executed in a so-called check phase
//5-> close callbacks - execute all 'close' event callbacks

//we import sth by require('') in nodejs but how to export sth?
//we export sth by module.exports = functionName

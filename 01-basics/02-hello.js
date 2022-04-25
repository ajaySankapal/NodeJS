//just like we have window in the browser which provide some cool functionality and methods
//in node we have global

// with process.argv array we get the argument which we want to pass to the node
// const mission = "learn";
//if we don't want to hardcode the mission we can also provide this value as argument by process.argv
const mission = process.argv[2];
//we want to give the argument at the second index
if (mission === "learn") {
  console.log("Time to write some node code");
} else {
  console.log(`Is ${mission} really more fun?`);
}

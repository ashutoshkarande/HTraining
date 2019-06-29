console.log("starting app");

setTimeout(() => {
    console.log("in function");
}, 2000);

setTimeout(() => {
    console.log("in function 2");
}, 0);

console.log("Ending...");
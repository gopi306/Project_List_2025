// console.log("Step1 : synchronous code start");
// queueMicrotask(()=>console.log("MicroTask 1 : queueMicroTask Executed"));
// Promise.resolve().then(()=>console.log("MicroTask 2: Promise 1 Resolved"));
// Promise.resolve().then(()=>console.log("MicroTask 3: Promise 2 Resolved"));
// console.log("Step 2 : Syncronous code End ");


//combine example of Micro and macro task queue 

console.log("Step 1: Synchronous Code Start"); 

setTimeout(() => {
    console.log("Macrotask 1: setTimeout Executed");
}, 3000);
Promise.resolve().then(() => {
    console.log("Microtask 1: Promise Resolved");
});
queueMicrotask(() => {
    console.log("Microtask 2: queueMicrotask Executed");
});
setTimeout(() => {
    console.log("Macrotask 2: Another setTimeout Executed");
}, 3000);
console.log("Step 2: Synchronous Code End");
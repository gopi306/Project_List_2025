// intro to asynchronous js 
// js is a single threaded language -> synchronous js 

// why do we need async.. 
// lets take a real world example 
// suppose you are a chef 
// syn...  

// asyn..  // boiling -> cook -> customer 
// 

// sync... code 

console.log("This is the first line ");

// console.log("This is the second line ");


console.log("This is the third line ");


// async 

console.log("This is the first line ");
setTimeout(()=> console.log("This is Second Line "),2000);
console.log("This is Third Line")

// how to know 
/**
 * 
 if your program/ code contains 

 fetch()
 async/await
 setTimeout 
 database connections (sql, mongodb)
 xmlHTTPRequest 
 setInterval 

 */

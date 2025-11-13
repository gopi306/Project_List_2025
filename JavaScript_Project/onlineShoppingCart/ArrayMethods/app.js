// !Array Methods ::

// *  Find method ::: 

// ? find method calls predicate once for each element of Array..

// *Find method returns the value of the each element of the array where 
// *  predicate true, and undefined otherwise..

const numbers = [ 10,20,30,40,50];

// ! Find Method
const findNumbers = numbers.find((value,index)=>{
  return value>50;
  // ! return `${value} ` // it returns the first element of the array

})

console.log(findNumbers);


//! FindIndex method

const findIndexNumber = numbers.findIndex((value)=>{
  return value>30;
})

console.log(findIndexNumber);// Retuns the index number is "3" and vale is "40"


// ! Some Method :

const marks = [75,62,72,30,45,58];

const atleastOneNumber = marks.some(value=>{
  return value> 35
})

console.log(atleastOneNumber);

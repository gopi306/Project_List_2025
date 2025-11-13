/*
The Call Stack is a data structure that keeps track of function execution in
Javascript. I t follows the LIFO (Last In, First Out) principle: the last function
that gets pushed onto the stack is the first one to be executed
_

*/
function greet(){
    console.log("Hello")
    askName();
}
function askName(){
    console.log("What is your name buddy ?")
    sayGoodBye();
}
function sayGoodBye(){
    console.log("GoodBye")
}
greet()
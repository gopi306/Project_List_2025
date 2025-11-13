let string = (str)=>{
  let reverse = "";

  for (let char = str.length - 1;char>=0; char--  ) {
       reverse = reverse + str[char];
     }
    if (str === reverse){
      return true;
    }
    else{
      return false
    }

}

console.log(string("rada"));

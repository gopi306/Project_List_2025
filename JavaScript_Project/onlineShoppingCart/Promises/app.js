// Create Promises with then method 


function foodPrepared(){
  
  
  return new Promise((resolve, reject)=>{
    console.log("Food is Preparing ....");

    setTimeout(()=>{

      // console.log("Food is Prepared");
      resolve("Food is Ready")
    },4000);
    

  })
}


// Create Promises with then method 


function eatFood(){
  
  
  return new Promise((resolve, reject)=>{
    // console.log("Food is Eating....");

    setTimeout(()=>{

      // console.log("Food eaten");
      resolve("All eaten")
    },3000);
    

  })
}


// Create Promises with then method 


function goToSchool(){
  
  
  return new Promise((resolve, reject)=>{
    // console.log(" I Go to School");

    setTimeout(()=>{

      // console.log("Go to at school");
      resolve("At the school")
    },2000);
    

  })
}


foodPrepared().then((data)=>{
  console.log(data);
  return eatFood();
}).then((data)=>{
  console.log(data);
  return goToSchool();
}).then((data)=>{
  console.log(data);
  console.log("Finally all promises are Completed");
  
})

async function fetchData(){
    try{
        let response = await new Promise ((resolve,reject)=>{
            setTimeout(()=>{
                let success=true;
                if(success){
                    resolve("Data Received successfully")
                }else {
                    reject("error fetching data")
                                  }
            },2000);
        });
        console.log("Success:",response)
    }catch(error){
        console.log("Failure:",error)
    }finally{
        console.log("Promise execution completed")
    }
}
fetchData()
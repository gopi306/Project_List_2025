/**
 * 
 * async/await is syntactic sugar over Promises, making asynchronous code look
synchronous, improving readability and maintainability.
 */

async function fetchData(){
    try{
        let response = await new Promise ((resolve,reject)=>{
            setTimeout(()=>{
                let success=false;
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


// fetching 

async function fetchingRealApi(){
    try{
        let response = await fetch("https://someurl.com");
        let data = await response.json();
        console.log("User Data: ",data);
    }catch(error){
        console.log("ERROR",error)
    }
}


// example 3 
async function fetchUserData(username) {
    try {
    
        let userResponse = await fetch(`https://api.github.com/users/${username}`);
        if (!userResponse.ok) throw new Error(`HTTP Error! Status: ${userResponse.status}`);
        let userData = await userResponse.json();

        console.log("User Data:", userData);
        console.log("Username:", userData.login);
        console.log("Followers:", userData.followers);
        console.log("Public Repositories:", userData.public_repos);

      
        let repoResponse = await fetch(`https://api.github.com/users/${username}/repos`);
        if (!repoResponse.ok) throw new Error(`HTTP Error! Status: ${repoResponse.status}`);
        let repos = await repoResponse.json();

        console.log("Repositories:", repos);
        console.log("First Repo Name:", repos[0]?.name || "No Repositories");
        console.log("First Repo URL:", repos[0]?.html_url || "No Repositories");
    } catch (error) {
        console.error("Error:", error.message);
    }
}

fetchUserData("google");

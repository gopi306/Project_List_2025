/**
 
A Promise is an object that represents the eventual completion (or failure) of an
asynchronous operation. I t has three states:
Pending → Initial state waiting for the operation to complete)
Fulfilled → Operation completed successfully (.then())
Rejected → Operation failed (catch!»
 */


// function fetchData() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             let success = true; 

//             if (success) {
//                 resolve("Data received successfully");
//             } else {
//                 reject("Error fetching data.");
//             }
//         }, 2000); 
//     });
// }
// fetchData()
//     .then((data) => {
//         console.log("Success:", data);
//     })
//     .catch((error) => {
//         console.error("Failure:", error);
//     })
//     .finally(() => {
//         console.log("Promise execution completed.");
//     });



// same github program

// example 2 
function fetchUserData(username) {
    fetch(`https://api.github.com/users/${username}`)
        .then(response => {
            if (!response.ok) throw new Error(`HTTP Error! Status: ${response.status}`);
            return response.json();
        })
        .then(userData => {
            console.log("User Data:", userData);
            console.log("Username:", userData.login);
            console.log("Followers:", userData.followers);
            console.log("Public Repositories:", userData.public_repos);

         
            return fetch(`https://api.github.com/users/${username}/repos`);
        })
        .then(response => {
            if (!response.ok) throw new Error(`HTTP Error! Status: ${response.status}`);
            return response.json();
        })
        .then(repos => {
            console.log("Repositories:", repos);
            console.log("First Repo Name:", repos[0]?.name || "No Repositories");
            console.log("First Repo URL:", repos[0]?.html_url || "No Repositories");
        })
        .catch(error => {
            console.error("Error:", error.message);
        });
}

fetchUserData("google");
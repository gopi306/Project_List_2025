/**
 * 
 * A callback is a function passed as an argument to another function, which is
executed later when an operation is completed. This was the primary way of
handling asynchronous operations before Promises and async/await.
 */


function fetchUserData(callback) {
    setTimeout(() => {
        console.log("Fetched user data from server.");
        callback({ id: 1, name: "Tekneikos" });
    }, 2000);
}
function processUserData(user, callback) {
    setTimeout(() => {
        console.log("Processing user data for:", user.name);
        callback({ ...user, status: "Processed" }); 
    }, 1500);
}
function displayUserData(user) {
    console.log("Displaying user data:", user);
}
fetchUserData((userData) => {
    processUserData(userData, (processedData) => {
        displayUserData(processedData);
    });
});



// callback hell 



function step1(callback) {
    setTimeout(() => {
        console.log("Step 1 complete.");
        callback();
    }, 1000);
}

function step2(callback) {
    setTimeout(() => {
        console.log("Step 2 complete.");
        callback();
    }, 1000);
}

function step3(callback) {
    setTimeout(() => {
        console.log("Step 3 complete.");
        callback();
    }, 1000);
}

function step4(callback) {
    setTimeout(() => {
        console.log("Step 4 complete.");
        callback();
    }, 1000);
}

step1(() => {
    step2(() => {
        step3(() => {
            step4(() => {
                console.log("All steps completed.");
            });
        });
    });
});
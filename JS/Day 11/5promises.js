//promises
//The promisses are obj. in javascript
//They are used to handle asynchronous operations
//They are used to handle the errors and the success of the operations
//They are used to handle the operations that are not dependent on each other
//They are used to handle the operations that are dependent on each other
//They are used to handle the operations that are dependent on each other
// The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
// Excecuting previous code with help of promises

function saveToDb(data){
    
    return new Promise((resolve,reject)=>{
        let internetSpeed=Math.floor(Math.random()*10)+1;
        if (internetSpeed>4){
            resolve("Sucess : data was saved");
        }else{
            reject("Failed : weak connectiopn");
        }
    });
    
}

// saveToDb("Rohan Kaitake");
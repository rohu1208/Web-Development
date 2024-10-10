//promises
//then() and catch()

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
    // let request= saveToDb("Rohan Kaitake") //req=promise obj.
    // request.then((message)=>{
    //     console.log("Promise was resolved");
    //     console.log(message);
    //     console.log(request);
    //     }).catch((error)=>{
    //         console.log("Promise was rejected");
    //         console.log(error);
    //         console.log(request);
    //     });

//it don't throw error
// -----------------------------------------------------------------------
//Promise Chaining 
//one after another
//improved version

// saveToDb("Rohan Kaitake")
// .then(()=>{
//     console.log("Data 1 Saved");
//     return saveToDb("mrRohan Kaitake");
// })
// .then(()=>{
//     console.log("data 2 saved");
//     return saveToDb("hurricane");
// })
// .then(()=>{
//     console.log("data 3 saved");
//     })
// //if any then state fail then catch operates
// .catch(()=>{
//     console.log("data1 failed . promise was rejected");

// });


//------------------------------------------------
//result & error
saveToDb("Rohan Kaitake")
.then((result)=>{
    console.log("Data 1 Saved");
    console.log("result of promise -",result);
    return saveToDb("mrRohan Kaitake");
})
.then((result)=>{
    console.log("data 2 saved");
    console.log("result of promise -",result);
    return saveToDb("hurricane");
})
.then((result)=>{
    console.log("data 3 saved");
    console.log("result of promise -",result);
    })
//if any then state fail then catch operates
.catch((error)=>{
    console.log("data1 failed . promise was rejected");
    console.log("Error of promise -",error);

});





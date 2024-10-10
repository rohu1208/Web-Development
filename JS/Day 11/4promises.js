// Setting up for Promises

function saveToDb(data,success,failure){
    let internetSpeed=Math.floor(Math.random()*10)+1;
    if (internetSpeed>4){
        success();
    // console.log("your data was saved",data);
    }
   else{
    failure();
}}

//complication in  nesing
saveToDb("ROAHAN KAitake",
    ()=>{  //callback
    console.log("sucess : your data saved ");
    saveToDb("MR ROHAN",
        ()=>{ //callback
        console.log("sucess 2 : your data saved ");
    },()=>{
        console.log("failure 2 : your data was not saved");
    });
},()=>{
    console.log("failure : your data was not saved");
});

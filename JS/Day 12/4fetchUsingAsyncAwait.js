let url="https://catfact.ninja/fact";
async function getFact(){
    const response = await fetch(url);
    const data = await response.json(); 
    console.log(data);

}
//getFacts()

// two facts
async function getTwoFacts(){
    try{
    const response1 = await fetch(url);
    const response2 = await fetch(url);
    const data1 = await response1.json();
    const data2 = await response2.json();
    console.log("data 1 -",data1);
    console.log("data 2 -",data2);
    }catch(e){
        console.log("Error ",e);
    }
}

//getTwoFacts()
    
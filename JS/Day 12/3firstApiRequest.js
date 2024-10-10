// let url="https://catfact.ninja/fact";
// fetch(url);

let url="https://catfact.ninja/fact";
fetch(url)
.then((resp)=>{
    console.log(resp);
    resp.json().then((data)=>{
        console.log(data);
        console.log(data.fact);
    });
})
.catch((error)=>{
    console.log("ERROR -> ",error);
    });

// u can do for more fact by more then

// Topic - Activity USing query selector
//http://universities.hipolabs.com/search?name=middle
// search university list based on country name

let url="http://universities.hipolabs.com/search?name="
// let country="nepal";
async function getColleges(country){
    try{
        let response = await axios.get(url+country);
        console.log(response.data);
        return response.data;
        }catch(e){
            console.log("Error",e);
            return [];
        }}

let btn=document.querySelector("button");
btn.addEventListener("click",async()=>{
    let country=document.querySelector("input").value;
    let colArr=await getColleges(country);
    console.log(colArr);

    console.log(country)
    getColleges(country);
    show(colArr);
});

function show(colArr){
    let list=document.querySelector("#list");
    list.innerText = "";

    for(col of colArr){
        console.log(col.name);
        let li=document.createElement("li")
        li.innerText=col.name
        list.appendChild(li);
    }
}

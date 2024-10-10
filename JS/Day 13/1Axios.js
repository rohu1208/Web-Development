// URL to fetch the cat fact
let url = "https://catfact.ninja/fact";

// Fetch cat fact using Axios with promise
axios.get(url)
    .then(response => {
        console.log(response.data);
    })
    .catch(error => {
        console.error("Error fetching data -", error);
    });
//---------------------------------------------------------------------
// Async function to fetch and display cat fact
async function getFacts() {
    try {
        let response = await axios.get(url);
        console.log(response.data); // Log the response data
        
        // Get the fact from the response
        let fact = response.data.fact;

        // Select the HTML element where the fact will be displayed
        let p = document.querySelector("#result");
        p.innerText = fact;

    } catch (e) {
        console.log("Error - ", e);
        let p = document.querySelector("#result");
        return "NO FACT FOUND"; // Show a default message in case of error
    }
}

// Add event listener to the button to fetch fact on click
let btn = document.querySelector("button");
btn.addEventListener("click", getFacts);

// DOG IMAGE API
// URL to fetch the dog image
let dogUrl = "https://dog.ceo/api/breeds/image/random";
// Fetch dog image using Axios with promise
axios.get(dogUrl)
    .then(response => {
        console.log(response.data);
    })
    .catch(error => {
        console.error("Error fetching data -", error);
    });
// Async function to fetch and display dog image
async function getDogPic(){
    try {
        let response = await axios.get(dogUrl);
        console.log(response.data); // Log the response data

        // Get the dog image URL from the response
        let imageUrl = response.data.message;
         // Select the HTML image element to display the picture
         let img = document.querySelector("#dog-pic");
         img.src = imageUrl;
 
     } catch (e) {
         console.log("Error - ", e);
         let img = document.querySelector("#dog-pic");
         img.alt = "NO DOG FOUND"; // Show a default message in case of error
     }
 }
 
 // Add event listener to the button to fetch dog picture on click
 let btn2 = document.querySelector("#btn");
 btn2.addEventListener("click", getDogPic);
// Topic - Axios Passing Header

const url="https://icanhazdadjoke.com/"
async function getJokes(){
    try{
        const config = {header:{Accept:"application/json"}}
        let resp= await axios.get(url,config);
        let joke=resp.data.joke;
        console.log(joke);

    }
    catch(e){
        console.log("Error",e);
        
    }
}
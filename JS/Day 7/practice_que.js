

// Q.2 Write function that print Hellow world 5 times at interval of 2 sec each
let id = setInterval(() => {
    console.log("Hello World")
}, 2000);

setTimeout(()=>{
    clearInterval(id);
},10000)
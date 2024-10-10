//a <p> with red text says "hey im red"
let para1=document.createElement('p');
para1.innerText="Hey I'm Red ";
document.querySelector("body").append(para1);
para1.classList.add('red');

//a <h3> with blue text says "hey im blue"
let h3=document.createElement('h3');
h3.innerText="Hey I'm Blue H3 ";
document.querySelector("body").append(h3);
h3.classList.add('blue');

let div=document.createElement('div');
let h1=document.createElement('h1');
let para2=document.createElement('p');

h1.innerText="I'm in a div"
para2.innerText="Me too !"

div.append(h1);
div.append(para2);
div.classList.add("divbox");

document.querySelector("body").append(div);

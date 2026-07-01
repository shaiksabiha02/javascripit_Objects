let heading=document.getElementById("heading");
console.log(heading);
let elements=document.getElementsByClassName("text");
console.log(elements);
// for specific elemet
console.log(elements[1]);
// by tag name
let tag=document.getElementsByTagName("h2");
console.log(tag);
console.log(tag[1]);
// queary selector it return the first match
let q = document.querySelector("h1");
console.log(q);
// queary selector all
let a = document.querySelectorAll("p");
console.log(a);
// inner html
let box = document.getElementById("box");
console.log(box.innerHTML);    // gets the inner html data
// chaining inner html
box.innerHTML="<p>Shaik Sabiha</p>"
//add multiple elements also using inner html
let c=document.getElementById("box");
box.innerHTML=`<p>Shaik Sadhika</p>
<p>Shaik Salma</p>
<button>This is me</button>
`
// innerhtml using textcontent
let d = document.getElementById("box");
console.log(d.textContent);

// inner text
let e = document.getElementById("heading");
heading.innerText="welcome"
console.log(e);

let f = document.getElementsByTagName("h1");

f[0].innerHTML="welcome"
console.log(f);
//using inner text

let g = document.getElementById("heading");
g.innerText="learning Dom";
console.log(g);

// dom for style

let h=document.getElementById("heading");
heading.style.color = "red";
heading.style.fontSize = "50px";
heading.style.backgroundColor="green";
heading.style.textAlign = "center";

// to change whole body colour

let body = document.body;
body.style.backgroundColor="lightblue";

// get attribute

let i = document.getElementById("heading");
console.log(i.getAttribute("id"));

let j=document.getElementById("image");
console.log(j.getAttribute("src"));

let image = document.getElementById("image");
image.style.width="300px";
image.style.height="200px";

let  image1=document.getElementById("image");
image1.setAttribute("src","https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Dog_Breeds.jpg/330px-Dog_Breeds.jpg")

// events
let button = document.getElementById("btn");
let message = document.getElementById("message");

button.addEventListener("click",function()
{message.innerText="learning Concepts of DOM"
    document.body.style.backgroundColor="violet"

});

button.addEventListener("dblclick",function()
{
    document.body.style.backgroundColor="pink"
});

let k = document.createElement("p");
k.innerText=`now we are learning events concept
1. In this we are creating a element using create element without using html`
document.body.appendChild(k);
console.log(k);

let l=document.createElement("h1");
l.innerText=" Welcome to learning Java scripit"
document.body.appendChild(l);
console.log(l);

k.remove(); // it removes an element 
// Dom Traversing
// Parent Element
let m = document.getElementById("box");
m.parentElement.style.backgroundColor = "orange"; // parent means goes up
// CHILD
let n = document.getElementById("box");
console.log(n.children);
// children access them through the index value
console.log(n.children[0]);
// first element child
let o = document.getElementById("container");
console.log(o.firstElementChild);
o.firstElementChild.style.color="red";
let p = document.getElementById("box");
console.log(p.firstElementChild);
// last element
let r = document.getElementById("container");
console.log(r.lastElementChild);
console.log(r.nextElementSibling);
r.nextElementSibling.style.color = "maroon";
console.log(p.previousElementSibling);
p.previousElementSibling.style.color="balck";

// events mouse over
let eve = document.getElementById("eve");
eve.addEventListener("mouseover",function(){
    eve.style.backgroundColor="red"
});
eve.addEventListener("mouseout",function(){
    eve.style.backgroundColor="green"
});
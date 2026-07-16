const title = document.getElementById("title");

const card = document.getElementById("card");

const input = document.getElementById("name");

const preview = document.getElementById("preview");

const count = document.getElementById("count");

const keyboard = document.getElementById("keyboard");

const mouse = document.getElementById("mouse");

const department =
document.getElementById("department");

const form =
document.getElementById("studentForm");

const reset =
document.getElementById("reset");



// click

reset.addEventListener("click",()=>{

input.value="";

preview.textContent="";

count.textContent=0;

});



// dblclick

title.addEventListener("dblclick",()=>{

title.style.color="red";

});



// mouseover

card.addEventListener("mouseover",()=>{

card.style.transform="scale(1.05)";

});



// mouseout

card.addEventListener("mouseout",()=>{

card.style.transform="scale(1)";

});



// mousedown

card.addEventListener("mousedown",()=>{

card.style.background="#ddd";

});



// mouseup

card.addEventListener("mouseup",()=>{

card.style.background="white";

});



// mousemove

document.addEventListener("mousemove",(e)=>{

mouse.textContent=

`${e.clientX} ,

${e.clientY}`;

});



// input

input.addEventListener("input",()=>{

preview.textContent=input.value;

count.textContent=input.value.length;

});



// focus

input.addEventListener("focus",()=>{

input.style.background="yellow";

});



// blur

input.addEventListener("blur",()=>{

input.style.background="white";

});



// keydown

document.addEventListener("keydown",(e)=>{

keyboard.textContent=

"Down : "+e.key;

});



// keyup

document.addEventListener("keyup",(e)=>{

keyboard.textContent=

"Up : "+e.key;

});



// change

department.addEventListener("change",(e)=>{

alert(

"Department : "

+e.target.value

);

});



// submit

form.addEventListener("submit",(e)=>{

e.preventDefault();

alert(

"Registration Successful"

);

});
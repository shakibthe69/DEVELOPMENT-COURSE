let name = prompt("Enter your name:");

console.log(name);


alert("Welcome " + name);
let answer = confirm("Do you like JavaScript?");

console.log(answer);

document.write("Your name is " + name + "<br>");
if (answer) {
    document.write("You like JavaScript!");
} else { 
    document.write("You don't like JavaScript!");
}


let age = Number(prompt("Enter your age:"));

if(age >= 18){

    alert("You are an Adult.");

}else{

    alert("You are a Minor.");

}
document.write("<br>Your age is " + age + "<br>");

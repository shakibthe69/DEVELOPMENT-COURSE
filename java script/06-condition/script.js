let age = prompt("Enter your age:");

if(age >= 18){

    console.log("You are eligible to vote.");
} else {
    console.log("You are not eligible to vote.");
}

document.write("Your age is " + age + "<br>");
document.write("You are " + (age >= 18 ? "eligible" : "not eligible") + " to vote.");

let marks =prompt("Enter your marks:");

if(marks >= 80){

    console.log("Grade A");

}else if(marks >= 70){

    console.log("Grade B");

}else if(marks >= 60){

    console.log("Grade C");

}else{

    console.log("Fail");

}
document.write("<br>Your marks are " + marks + "<br>");
document.write("Your grade is " + (marks >= 80 ? "A" : marks >= 70 ? "B" : marks >= 60 ? "C" : "Fail") + ".");
document.write("<br>");


let day = prompt("Enter a number (1-4) to get the corresponding day of the week:");

switch(day){

    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    case 3:
        console.log("Wednesday");
        break;

    case 4:
        console.log("Thursday");
        break;

    default:
        console.log("Invalid Day");

}
document.write("You entered: " + day + "<br>");
document.write("The corresponding day is: " + (day == 1 ? "Monday" : day == 2 ? "Tuesday" : day == 3 ? "Wednesday" : day == 4 ? "Thursday" : "Invalid Day") + ".");
document.write("<br>");

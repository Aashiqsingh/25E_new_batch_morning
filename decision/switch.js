let no1 = parseInt(prompt("Enter first number :"));
let no2 = parseInt(prompt("Enter second number :"));

let choice = prompt("1 for Add \n2 for Sub \n3 For Mul \n4 for DIv \n\nEnter your choice :")

switch(choice){
    case "1": alert("Addition = "+ (no1 + no2));
    break;
    case "2": alert("Subtraction = "+ (no1 - no2));
    break;
    case "3": console.log("Multiplication = "+ (no1 * no2));
    break;
    case "4": alert("Division = "+ (no1 / no2));
    break;
    default: alert("Invalid Input");
}
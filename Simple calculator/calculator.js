let valA = prompt("Enter value of A ");
let valB = prompt("Enter value of B ");
let A = Number(valA);
let B = Number(valB);
let operation = prompt("Enter which operation you want to perform");

switch(operation)
{
    case '+':
        let a = Add(A,B);
        alert(`Sum of the numbers is : ${a}`);
        break;

     case '-':
        let s = Sub(A,B);
        alert(`Subtraction of the numbers is : ${s}`);
        break;

 case '*':
        let m = mult(A,B);
        alert(`Product of the numbers is : ${m}`);
        break;

 case '/':
        let d = div(A,B);
        alert(`Divison of the numbers is : ${d}`);
        break;


default :
       alert("Operation is invalid");
    
}


function Add(A,B) {
    return A + B;
}

function Sub(A,B) {
  return A - B;
}

function mult(A,B) {
  return A * B;
}

function div(A,B) {
  if (B === 0) {
    return "Cannot divide by zero!";
  }
  return A / B;
}
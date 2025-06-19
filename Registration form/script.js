const name = prompt("Enter your Name");
const Email = prompt("Enter Your E-mail");
const confirmation = confirm( `Please confirm your details:\n\nName: ${name}\nEmail: ${Email}\n\nIs this correct?`);




if(confirmation)
{
     alert("Registration Successful");

}

else
{ 
     alert("Registration Cancelled");
    
}
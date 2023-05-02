//function that checks the pssws are the same
let error=document.querySelector(".error");
function checkPssw(pssw1,pssw2){
    if(pssw1!== pssw2){
        
        error.textContent="Passwords are not the same";
        error.style.color="red"; 
        setTimeout(function(){
            error.textContent="";
        },1000) 
    
    }
 };
// This replace the placeholder in case the input loose focus with no data
const emptyField=document.querySelectorAll("input").forEach(function(e){
    e.addEventListener("click", function(){
        let placeholder= e.placeholder;
        console.log(placeholder);
        e.setAttribute("placeholder", "");
        e.addEventListener("blur",function(){
            if(e.value===""){
                e.setAttribute("placeholder", placeholder);
            }
        })
    })
});
//check the name input
const validName=document.getElementById("name").addEventListener("blur",function(e){
    if ((document.getElementById("name")).checkValidity() === false) {
        error.textContent="Insert the correct name";
        error.style.color="red";
       
        setTimeout(function(){
            error.textContent="";
        },2000) 
    
      }
})
//check the lastName
const validSurname=document.getElementById("surname").addEventListener("blur",function(e){
    if ((document.getElementById("surname")).checkValidity() === false) {
        error.textContent="Insert the correct Last Name";
        error.style.color="red";
        setTimeout(function(){
            error.textContent="";
        },2000) 
    }
})
//check Email
const validEmail=document.getElementById("email").addEventListener("blur",function(){
    if ((document.getElementById("email")).checkValidity() === false) {
        error.textContent="Insert the correct Email";
        error.style.color="red";
        setTimeout(function(){
            error.textContent="";
        },2000) 
    }
})
//check phone number
const validPhone=document.getElementById("phone").addEventListener("blur",function(){
    if ((document.getElementById("phone")).checkValidity() === false) {
        error.textContent="Phone Number Invalid";
        error.style.color="red";
        setTimeout(function(){
            error.textContent="";
        },2000) 
    }
})
//check Password
const validPssw=document.getElementById("pssw1").addEventListener("blur",function(){
    if ((document.getElementById("pssw1")).checkValidity() === false) {
        error.textContent="Password must have one capital letter and one lowercase letter";
        error.style.color="red";
        setTimeout(function(){
            error.textContent="";
        },3000) 
    }
})
//password compare


//Password instructions
// const psswInfo=document.getElementById("pssw1").addEventListener("focus",function(){
//     error.textContent="Password must have";
//     error.style.color="red"; 
//     console.log(error.textContent)
//     setTimeout(function(){
//         error.textContent="";
//     },1000) 

// })

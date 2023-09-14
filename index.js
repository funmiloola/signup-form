const emailField = document.getElementById("email-field");
const submitBtn = document.querySelector(".submit-btn");
const inputValue = emailField.value;
const errorMessage = document.getElementById('email-error');
const emailFormat = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
// const signupInfo= document.querySelector(".container");
// const sucessMessage = document.querySelector('.container2');
submitBtn.addEventListener('click',function(){
    if(emailFormat===inputValue){
      window.location.href = "index..html";
      errorMessage.innerHTML = "";
    } else {
      errorMessage.innerHTML = "valid email required";
      emailField.style.border = "1px solid hsl(4, 100%, 67%)";
      submitBtn.style.backgroundColor = "hsl(234, 29%, 20%)";
      submitBtn.style.border = "1px solid hsl(234, 29%, 20%)";
    } 
});
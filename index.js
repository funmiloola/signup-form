const emailLabel = document.getElementById("email-label");
const submitBtn = document.querySelector(".submit-btn");
const errorMessage = document.getElementById('email-error');
submitBtn.addEventListener('click',function(event) {
event.preventDefault()
  const emailField = document.getElementById("emailField");
  const inputValue = emailField.value;
  const emailFormat = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const inputMail = document.getElementsByClassName('input-mail');
    if(emailFormat.test(inputValue)) {
      errorMessage.innerHTML = "";
      window.location.href = "success.html";
      inputMail.innerHTML = inputValue;
    } else {
      errorMessage.innerHTML = "valid email required";
      emailField.style.border = "1px solid hsl(4, 100%, 67%)";
      submitBtn.style.backgroundColor = "hsl(234, 29%, 20%)";
      submitBtn.style.border = "1px solid hsl(234, 29%, 20%)";
    } 
});
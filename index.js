const submitBtn = document.querySelector(".submit-btn");
const input = document.getElementById('email');
const inputValue = input.value;
const placeholderRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const signupInfo= document.querySelector(".container");
const sucessMessage = document.querySelector('.container2');
submitBtn.addEventListener('click',function(){
    if(placeholderRegex.test(inputValue)){
      window.location.href = "index..html";
    } else {
        alert('invalid email');
    };

});
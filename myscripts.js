const text = document.querySelector('#text');
const textError = document.querySelector('.text-error');
text.addEventListener('input',function() {
    let nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');
    if(nameRegex.test(text.value))
        textError.textContent="";
    else textError.textContent = "NAME IS INCORRECT";
});

const salary = document.querySelector('#salary');
const output = document.querySelector('.salary-output');
output.textContent = salary.value;
salary.addEventListener('input',function(){
    output.textContent = salary.value;
});

//UC2
const email = document.querySelector('#email');
const emailError = document.querySelector('.email-error');
email.addEventListener('input',function() {
    let emailRegex = RegExp('^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$');
    if(emailRegex.test(email.value))
        emailError.textContent="";
    else emailError.textContent = "EMAIL IS INCORRECT";
});

/*
 * UC3: As a User need to follow pre-defined Mobile Format
 * Country code follow by space and 10 digit number
 */
const phone = document.querySelector('#phone');
const phoneError = document.querySelector('.phone-error');
phone.addEventListener('input',function() {
    let phoneRegex = RegExp('^[+][0-9]{2}[\\s,-][0-9]{10}$');
    if(phoneRegex.test(phone.value))
        phoneError.textContent="";
    else phoneError.textContent = "PHONE NUMBER IS INCORRECT";
});

/*
 * UC4: As a User need to follow pre-defined Password rules. 
 * Rule1 – minimum 8 Characters 
 */
const password = document.querySelector('#pwd');
const passwordError = document.querySelector('.password-error');
password.addEventListener('input',function() {
    let passwordRegex = RegExp('((?=.*[a-z A-Z]).{8,})');
    if(passwordRegex.test(password.value))
        passwordError.textContent="";
    else passwordError.textContent = "PASSWORD IS INCORRECT";
});


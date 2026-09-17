const contactForm = document.getElementById('contactForm');

if (contactForm){
const nameInput = document.getElementById('name');
const nameError = document.getElementById('nameError');

const emailInput = document.getElementById('email');
const emailError = document.getElementById('emailError');

const messageInput = document.getElementById('message');
const messageError = document.getElementById('messageError');

contactForm.addEventListener('submit', function (event) {
    event.preventDefault();
   // console.log('form submitted');
   let isValid = true;

   // Name Check
   if (nameInput.value.trim().length < 2) {
    nameError.textContent = 'Please enter your Full Name.';
    isValid = false;
   } else {
     nameError.textContent = '';
   }
   // Email Check
     const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
     if(!emailPattern.test(emailInput.value.trim())) {
        emailError.textContent= 'Please enter a valid email address.';
        isValid = false;
     } else{
        emailError.textContent = '';
     }

     //Message Check
     if(messageInput.value.trim().length < 10) {
        messageError.textContent= 'Message Should be at least 10 characters.';
        isValid = false;
     } else{
        messageError.textContent = '';
     }
   
   if (isValid) {
    document.getElementById('formSuccess').classList.add('visible');
    contactForm.reset();
   }
});
}
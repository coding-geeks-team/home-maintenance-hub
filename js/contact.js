let contactForm =document.getElementById('contact');
contactForm.addEventListener('submit',submitHandler);
function submitHandler(event){
    event.preventDefault();
}
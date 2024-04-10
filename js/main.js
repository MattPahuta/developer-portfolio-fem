console.log('Scripts connected');

const form = document.getElementById('contact-form');
const nameInput = document.getElementById('contact-name');
const emailInput = document.getElementById('contact-email');
const messageInput = document.getElementById('contact-message');

function validateForm(e) {
  e.preventDefault();

  console.log('Form submitted')
  nameInput.value = '';
  emailInput.value = '';
  messageInput.value = '';
}

form.addEventListener('submit', validateForm)
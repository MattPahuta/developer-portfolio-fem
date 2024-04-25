console.log('Scripts connected');

const form = document.getElementById('contact-form');

const nameInput = document.getElementById('contact-name');
const emailInput = document.getElementById('contact-email');
const messageInput = document.getElementById('contact-message');

function validateName(name) {
  if (!name) return 'Name is required';

  return '';
}

function validateEmail(email) {
  if (!email) return 'Email is required';

  const isValidEmail  = /^\S+@\S+$/g;
  if (!isValidEmail.test(email)) {
    emailInput.classList.add('invalid-input')
    return 'Sorry, invalid format here'
  }

  return '';
}

function validateMessage(message) {
  if (!message) return 'A message is required';

  if(message.length < 20) {
    return `That's a short message. Please tell me more.`
  }

  return '';
}

function handleSubmit(e) {
  e.preventDefault(e);

  const formDataEntries = new FormData(e.target).entries();
  const { name, email, message } = Object.fromEntries(formDataEntries);

  console.log(message.length)

  // custom form message containers
  const nameError = document.querySelector('.invalid-name');
  const emailError = document.querySelector('.invalid-email');
  const invalidMessage = document.querySelector('.invalid-message'); 

  // handle submit of name
  if (!name) {
    nameError.style.display = 'block';
    nameError.textContent = 'Please enter your name'
  } else {
    nameError.style.display = 'none';
  }

  // handle submit of email
  const emailErrorMessage = validateEmail(email);

  if (emailErrorMessage) {
    emailError.style.display = 'block';
    emailError.innerText = emailErrorMessage;
  } else {
    emailError.style.display = 'none';
  }

  // handle submit of message
  const messageErrorMessage = validateMessage(message);

  if (messageErrorMessage) {
    invalidMessage.style.display = 'block';
    invalidMessage.innerText = messageErrorMessage;
  } else {
    invalidMessage.style.display = 'none';
  }

  // clear inputs on submission
  nameInput.value = '';
  emailInput.value = '';
  messageInput.value = '';


}

form.addEventListener('submit', handleSubmit)                
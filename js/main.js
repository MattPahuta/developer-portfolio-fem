let isFormError = false;

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

function handleSubmit(e) {
  e.preventDefault(e);
  const nameInput = document.getElementById('contact-name');
  const emailInput = document.getElementById('contact-email');
  const messageInput = document.getElementById('contact-message');
  // get form data
  const formDataEntries = new FormData(e.target).entries();
  const { name, email, message } = Object.fromEntries(formDataEntries);
  // custom form message containers
  const nameError = document.querySelector('.invalid-name');
  const emailError = document.querySelector('.invalid-email');
  const messageError = document.querySelector('.invalid-message');
  const invalidNameIcon = document.querySelector('#invalid-name-icon'); 
  const invalidEmailIcon = document.querySelector('#invalid-email-icon'); 
  const invalidMessageIcon = document.querySelector('#invalid-message-icon');

  // handle submit of name
  if (!name) {
    nameError.style.display = 'block';
    nameError.textContent = 'Please enter your name'
    invalidNameIcon.style.display = 'block'
    isFormError = true;
  } else {
    nameError.style.display = 'none';
    nameError.textContent = '';
    invalidNameIcon.style.display = 'none'
    isFormError = false;
  }

  const emailErrorMessage = validateEmail(email);

  if (emailErrorMessage) {
    emailError.style.display = 'block';
    emailError.innerText = emailErrorMessage;
    invalidEmailIcon.style.display = 'block'
    isFormError = true;
  } else {
    emailError.style.display = 'none';
    emailError.innerText = '';
    invalidEmailIcon.style.display = 'none'
    isFormError = false;
  }

  if (!message) {
    messageError.style.display = 'block';
    messageError.innerText = 'A message is required';
    invalidMessageIcon.style.display = 'block'
    isFormError = true;
    return;
  } else {
    messageError.style.display = 'none';
    messageError.innerText = '';
    invalidMessageIcon.style.display = 'none'
    isFormError = false; 
  }

  if (!isFormError) {
    nameInput.value = '';
    emailInput.value = '';
    messageInput.value = '';
  }

}

document.getElementById('contact-form').addEventListener('submit', handleSubmit)                
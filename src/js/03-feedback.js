import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');

form.addEventListener('input', throttle(onInputChangeValue, 500));
form.addEventListener('submit', onSubmitForm);

const formDate = {};

function onInputChangeValue(e) {
  e.preventDefault();
  if (e.target === e.currentTarget) {
    return;
  }
  const { name, value } = e.target;

  console.log('name', formDate[name]);
  console.log('value', value);

  formDate[e.target.name] = e.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formDate));
}

document.addEventListener('DOMContentLoaded', function () {
  const dateLocalStore = localStorage.getItem('feedback-form-state');

  if (dateLocalStore !== null) {
    try {
      const data = JSON.parse(localStorage.getItem('feedback-form-state'));
      const emailInput = document.querySelector('.feedback-form input');
      const messageInput = document.querySelector('.feedback-form textarea');
      if (data) {
        emailInput.value = data.email;
        messageInput.value = data.message;
      }
    } catch (error) {
      console.log(error.message);
    }
  }
});

function onSubmitForm(e) {
  console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
  e.preventDefault();
  e.currentTarget.reset();
  localStorage.removeItem('feedback-form-state');
}

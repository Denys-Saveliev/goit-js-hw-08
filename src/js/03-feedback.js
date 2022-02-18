const _ = require('lodash');

const LOCALSTORAGE_KEY = 'feedback-form-state';

const formRef = document.querySelector('.feedback-form');

formRef.addEventListener('input', _.throttle(onUpdateInput, 500));
formRef.addEventListener('submit', onFormSubmit);
try {
   let fieldText = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
   formRef.elements.email.value = fieldText.email;
   formRef.elements.message.value = fieldText.message;
} catch {}

function onUpdateInput(e) {   
   localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(createFieldStatusObject()));
}

function createFieldStatusObject() {
  return {
    email: formRef.elements.email.value,
    message: formRef.elements.message.value,
  };
}

function onFormSubmit(e) {
   e.preventDefault();
   console.log(createFieldStatusObject());
   formRef.reset();
   localStorage.removeItem(LOCALSTORAGE_KEY);
}



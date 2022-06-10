import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  textarea: document.querySelector('.feedback-form textarea'),
};

populateTextarea();

const STORAGE_KEY = 'feedback-form-state';

const formData = {};

// refs.form.addEventListener('input', e => {
//   //   formData[e.target.name] = e.target.value;

//   localStorage.setItem(formData);
//   console.log(formData);
// });

refs.form.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();

  e.target.reset();
  localStorage.removeItem(STORAGE_KEY);
}

refs.textarea.addEventListener('input', throttle(onTextareaInput, 500));

function onTextareaInput(e) {
  const message = e.target.value;
  localStorage.setItem(STORAGE_KEY, message);
}

function populateTextarea() {
  const savedMessage = localStorage.getItem('feedback-form-state');

  if (savedMessage) {
    console.log(savedMessage);
    refs.textarea.value = savedMessage;
  }
}

import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  textarea: document.querySelector('.feedback-form textarea'),
};

const STORAGE_KEY = 'feedback-form-state';

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
  const savedMessage = localStorage.getItem(STORAGE_KEY);

  if (savedMessage) {
    console.log(savedMessage);
    refs.textarea.value = savedMessage;
  }
}
populateTextarea();

const formData = {};

refs.form.addEventListener('input', e => {
  formData[e.target.name] = e.target.value;

  // console.log(e.target.name);
  localStorage.setItem('formUser', JSON.stringify(formData));
  const SaveUser = localStorage.getItem('formUser');
  const parsedUser = JSON.parse(SaveUser);
  console.log(parsedUser);
});

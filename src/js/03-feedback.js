import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  textarea: document.querySelector('.feedback-form textarea'),
};

const STORAGE_KEY = 'feedback-form-state';

const formData = {};

refs.form.addEventListener('input', throttle(onFormUser, 500));

function onFormUser(e) {
  formData[e.target.name] = e.target.value;

  localStorage.setItem('formUser', JSON.stringify(formData));
  const SaveUser = localStorage.getItem('formUser');
  const parsedUser = JSON.parse(SaveUser);
}

refs.form.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();

  e.target.reset();
  localStorage.removeItem(STORAGE_KEY);
  localStorage.removeItem('formUser');
  console.log(formData);
}

refs.textarea.addEventListener('input', throttle(onTextareaInput, 500));

function onTextareaInput(e) {
  const message = e.target.value;
  localStorage.setItem(STORAGE_KEY, message);
}

populateTextarea();
function populateTextarea() {
  const savedMessage = localStorage.getItem(STORAGE_KEY);

  if (savedMessage) {
    console.log(savedMessage);
    refs.textarea.value = savedMessage;
  }
}

import throttle from "lodash.throttle";

const STORAGE_KEY = 'feedback-form-state';

let formData = {};

const refs = {
    form: document.querySelector('.feedback-form'),
    email: document.querySelector('.feedback-form input'),
    message: document.querySelector('.feedback-form textarea')
}

// populateForm();

// refs.form.addEventListener('submit', onFormSubmit);

refs.form.addEventListener('input', throttle(onInputCreateFromData, 500));

function onInputCreateFromData(e) {
formData[e.target.name] = e.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData))
}

// function onFormSubmit(e) {
//     e.preventDefault();
//     e.currentTarget.reset();
//     localStorage.removeItem(STORAGE_KEY);
//     console.log(formData);
// }

// function populateForm() {
//     const savedMessage = localStorage.getItem(STORAGE_KEY);
//     const parsedMessage = JSON.parse(savedMessage);
    
//     if (savedMessage) {
//         // refs.email.value = parsedMessage.name.value
//         // refs.message.value = parsedMessage.name.value
//     }
// }
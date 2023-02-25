import throttle from "lodash.throttle";

const STORAGE_KEY = 'feedback-form-state';

let formData = {};

const refs = {
    form: document.querySelector('.feedback-form'),
    email: document.querySelector('.feedback-form input'),
    message: document.querySelector('.feedback-form textarea')
}

populateTextarea();

refs.form.addEventListener('submit', onFormSubmit);

refs.form.addEventListener('input', throttle(e => {
    formData[e.target.name] = e.target.value;

    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData))
}, 500));


function onFormSubmit(e) {
    e.preventDefault();
    e.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
    console.log(formData);
}

function populateTextarea() {
    const savedMessage = localStorage.getItem(STORAGE_KEY);
    const parsedMessage = JSON.parse(savedMessage);
    console.log(parsedMessage);
    if (savedMessage) {
        refs.form.value = parsedMessage
        // console.log(savedMessage);
    }
}
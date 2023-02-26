// import throttle from "lodash.throttle";

const STORAGE_KEY = 'feedback-form-state';

let formData = {};

const refs = {
    form: document.querySelector("form"),
    inputEmail: document.querySelector("input"),
    textMessage: document.querySelector(".feedback-form textarea")
}

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', onInputCreateFormData);

 populateForm();

function onInputCreateFormData(e) {
    formData[e.target.name] = e.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData))
}

function onFormSubmit(e) {
    e.preventDefault();
    e.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
    console.log(formData);
}

function populateForm() {
    const savedMessage = localStorage.getItem(STORAGE_KEY);

    // console.log(savedMessage)

    const parsedMessage = JSON.parse(savedMessage);
    
    if (parsedMessage) {
        refs.inputEmail.value = parsedMessage.email;
        refs.textMessage.value = parsedMessage.message;
    };

    // console.log(parsedMessage);
}
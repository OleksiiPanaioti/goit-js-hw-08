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
    e.target.reset();
    localStorage.removeItem(STORAGE_KEY);
    console.log(formData);
}

function populateForm() {
    const savedFormData = localStorage.getItem(STORAGE_KEY);
    
    if (savedFormData) {
        const parsedFormData = JSON.parse(savedFormData);
        refs.inputEmail.value = parsedFormData.email || '';
        refs.textMessage.value = parsedFormData.message || '';
        formData = parsedFormData;
    }
}
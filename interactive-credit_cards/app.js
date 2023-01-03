const cardNumber = document.getElementById('card-number');
const inpNumber = document.getElementById('input-number');

const cardName = document.getElementById('name');
const inpName = document.getElementById('input-name');

const cardMonth = document.getElementById('month');
const inpMonth = document.getElementById('input-month');

const cardYear = document.getElementById('year');
const inpYear = document.getElementById('card-year');

const cardCvc = document.getElementById('cvc');
const inpCvc = document.getElementById('card-cvc');

const submitBtn = document.getElementById('submit_btn');

const completed = document.querySelector('.thank');
const form = document.querySelector('form');

function setCardNumber (e){
    cardNumber.innerText = format(e.target.value);
}
function setCardName (e){
    cardName.innerText = e.target.value;
}
function setCardMonth (e){
    cardMonth.innerText = e.target.value;
}
function setCardYear (e){
    cardYear.innerText = e.target.value;
}
function setCardCvc (e){
    cardCvc.innerText = e.target.value;
}

function format(s) {
    return s.toString().replace(/\d{4}(?=.)/g, "$&");
}

function handleSubmit(e){
    e.preventDefault();
    if(!inpName.value) {
        inpName.classList.add("error");
        inpName.parentElement.classList.add("error-message");
    } else {
        inpName.classList.remove("error");
        inpName.parentElement.classList.remove("error-message");
    }
    if(!inpNumber.value) {
        inpNumber.classList.add("error");
        inpNumber.parentElement.classList.add("error-message");
    } else {
        inpNumber.classList.remove("error");
        inpNumber.parentElement.classList.remove("error-message");
    }
    if(!inpMonth.value) {
        inpMonth.classList.add("error");
        inpMonth.parentElement.classList.add("error-message");
    } else {
        inpMonth.classList.remove("error");
        inpMonth.parentElement.classList.remove("error-message");
    }
    if(!inpYear.value) {
        inpYear.classList.add("error");
        inpYear.parentElement.classList.add("error-message");
    } else {
        inpYear.classList.remove("error");
        inpYear.parentElement.classList.remove("error-message");
    }
    if(!inpCvc.value) {
        inpCvc.classList.add("error");
        inpCvc.parentElement.classList.add("error-message");
    } else {
        inpCvc.classList.remove("error");
        inpCvc.parentElement.classList.remove("error-message");
    }
    if (inpName.value && inpNumber.value && inpMonth.value && inpYear.value && inpCvc.value) {
        completed.classList.remove("hidden");
        form.classList.add("hidden");
    }
}

inpNumber.addEventListener("keyup", setCardNumber);
inpName.addEventListener("keyup", setCardName);
inpMonth.addEventListener("keyup", setCardMonth);
inpYear.addEventListener("keyup", setCardYear);
inpCvc.addEventListener("keyup", setCardCvc);
submitBtn.addEventListener("click", handleSubmit);


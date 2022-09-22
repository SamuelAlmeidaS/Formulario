const form = document.querySelector('.form');
const campos = document.querySelectorAll('.required');
const spans = document.querySelectorAll('.span-required');
const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

form.addEventListener('submit', (event) => {
    event.preventDefault();
    nameValidate();
    emailValidate();
    mainPasswordValidate();
    comparePassword();
});

function setError(index){
    campos[index].style.border = '2px solid var(--red)';
    spans[index].style.display = 'block';
}

function removeError(index){
    campos[index].style.border = '';
    spans[index].style.display = '';
}

function nameValidate(){
    campos[0].value.length < 3 ? setError(0) : removeError(0);
}

function emailValidate(){
    emailRegex.test(campos[1].value) == true ? removeError(1) : setError(1);
}

function mainPasswordValidate(){
    campos[2].value.length < 8 ? setError(2) : removeError(2);
    comparePassword();
}

function comparePassword() {
    campos[2].value == campos[3].value 
    && campos[3].value.length >= 8 
    ? removeError(3) 
    : setError(3);
}
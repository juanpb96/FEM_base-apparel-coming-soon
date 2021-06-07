const form = document.getElementsByTagName('form')[0];
const emailInput = document.getElementsByClassName('email')[0];
const button = document.getElementsByTagName('button')[0];
const errorP = document.getElementById('error');
const emailRegExp = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;



const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    if (email === '' || !emailRegExp.test(email)) {
        errorP.innerText = email === '' ? 'Please insert an email.' : 'Please provide a valid email.';
        errorP.classList.add('error--active');
        button.classList.add('button--error');
        emailInput.classList.add('email--error');
        return;
    }

    errorP.classList.remove('error--active');
    button.classList.remove('button--error');
    emailInput.classList.remove('email--error');
    emailInput.value = '';
};

form.addEventListener('submit', handleSubmit);
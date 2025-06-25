import users from './users.js';

export default function validateLogin() {
  const signUpSlide = document.querySelector('.sign-up-btn');
  const signInSubmit = document.getElementById('sign-in-submit');

  const inputEmail = document.querySelector('.input-email-login');
  const inputPassword = document.querySelector('.input-password-login');

  // texto de erros.
  const emailError = document.querySelector('.input-email-login .input-error');
  const passwordError = document.querySelector('.input-password-login .input-error');

  // valor dos inputs.
  const email = document.getElementById('email-login');
  const password = document.getElementById('password-login');

  // limpa o formulário ao fazer o slide.
  const clearForm = () => {
    const inputArea = document.querySelectorAll('.input-area');
    const inputError = document.querySelectorAll('.input-error');
    const inputs = document.querySelectorAll('.input-area input');

    inputArea.forEach(i => i.classList.remove('invalid'));
    inputError.forEach(i => i.classList.remove('error'));
    inputs.forEach(i => i.value = "");
  }

  const isRegisteredEmail = () => {
    const user = users.find(user => user.email === email.value);
    const error = emailError.querySelector('span');
    inputEmail.classList.add('invalid');
    emailError.classList.add('error');

    if (!user) {
      error.textContent = "This email isn't registered.";
      return false;
    }

    inputEmail.classList.remove('invalid');
    emailError.classList.remove('error');
    error.textContent = "";
    return true;
  }

  const isRegisteredPassword = () => {
    const user = users.find(user => user.email === email.value);
    const error = passwordError.querySelector('span');
    inputPassword.classList.add('invalid');
    passwordError.classList.add('error');

    if (!user || user.password != password.value) {
      error.textContent = "Incorrect password.";
      return false;
    }

    inputPassword.classList.remove('invalid');
    passwordError.classList.remove('error');
    error.textContent = "";
    return true;
  }

  const isValidForm = () => {
    const registeredEmail = isRegisteredEmail();
    const registeredPassword = isRegisteredPassword();

    return registeredEmail && registeredPassword;
  }

  signUpSlide.addEventListener('click', clearForm);
  email.addEventListener('input', isRegisteredEmail);
  password.addEventListener('input', isRegisteredPassword);
  signInSubmit.addEventListener('click', (event) => {
    if (isValidForm()) {
      console.log("logado");
    } else {
      console.log("erro");
    }
  });
}
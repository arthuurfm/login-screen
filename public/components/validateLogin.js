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
  const inputs = document.querySelectorAll('.input-area input');

  // limpa o formulário ao fazer o slide.
  const clearForm = () => {
    const inputArea = document.querySelectorAll('.input-area');
    const inputError = document.querySelectorAll('.input-error');
    const inputs = document.querySelectorAll('.input-area input');

    inputArea.forEach(i => i.classList.remove('invalid'));
    inputError.forEach(i => i.classList.remove('error'));
    inputs.forEach(i => i.value = "");
  }

  // limpa os erros ao começar a digitar.
  const isTyping = () => {
    const inputArea = document.querySelectorAll('.input-area');
    const inputError = document.querySelectorAll('.input-error');
    const inputs = document.querySelectorAll('.input-area input');

    inputs.forEach(i => {
      if (i.value.length > 0) {
        inputArea.forEach(i => i.classList.remove('invalid'));
        inputError.forEach(i => i.classList.remove('error'));
      }
    });
  }

  const isRegisteredEmail = () => {
    const user = users.find(user => user.email === email.value);
    const error = emailError.querySelector('span');
    inputEmail.classList.add('invalid');
    emailError.classList.add('error');

    if (email.value == "") {
      error.textContent = "This field must not be empty.";
      return false;
    }

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

    if (password.value == "") {
      error.textContent = "This field must not be empty.";
      return false;
    }

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

  inputs.forEach(i => i.addEventListener('input', isTyping));

  signUpSlide.addEventListener('click', clearForm);
  signInSubmit.addEventListener('click', (event) => {
    event.preventDefault();
    if (isValidForm()) {
      const user = users.find(user => user.email === email.value);

      if (user) {
        // guarda o usuário logado localmente.
        sessionStorage.setItem('loggedUser', JSON.stringify(user));
        // redireciona para outra página.
        window.location.href = "./profile.html";
      }
    }
  });
}
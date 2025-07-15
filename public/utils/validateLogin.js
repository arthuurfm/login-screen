import users from './users.js';

export default function validateLogin() {
  const signUpSlide = document.querySelector('.sign-up-btn');
  const signUpSpan = document.querySelector('.sign-up-container span b');
  const signInSubmit = document.getElementById('sign-in-submit');
  
  const inputEmail = document.querySelector('.input-email-login');
  const inputPassword = document.querySelector('.input-password-login');
  
  // valor dos inputs.
  const email = document.getElementById('email-login');
  const password = document.getElementById('password-login');
  const inputs = document.querySelectorAll('.input-area input');

  // limpa o formulário ao fazer o slide.
  const clearForm = () => {
    const inputArea = document.querySelectorAll('.input-area');
    const inputs = document.querySelectorAll('.input-area input');

    inputArea.forEach(i => i.classList.remove('invalid'));
    inputs.forEach(i => i.value = "");
  }

  // limpa os erros ao começar a digitar.
  const isTyping = () => {
    const inputArea = document.querySelectorAll('.input-area');
    const inputs = document.querySelectorAll('.input-area input');

    inputs.forEach(i => {
      if (i.value.length > 0) {
        inputArea.forEach(i => i.classList.remove('invalid'));
      }
    });
  }

  const isRegisteredEmail = () => {
    const user = users.find(user => user.email === email.value);
    inputEmail.classList.add('invalid');

    if (email.value == "") {
      return false;
    }

    if (!user) {
      return false;
    }

    inputEmail.classList.remove('invalid');
    return true;
  }

  const isRegisteredPassword = () => {
    const user = users.find(user => user.email === email.value);
    inputPassword.classList.add('invalid');

    if (password.value == "") {
      return false;
    }

    if (!user || user.password != password.value) {
      return false;
    }

    inputPassword.classList.remove('invalid');
    return true;
  }

  const isValidForm = () => {
    const registeredEmail = isRegisteredEmail();
    const registeredPassword = isRegisteredPassword();

    return registeredEmail && registeredPassword;
  }

  inputs.forEach(i => i.addEventListener('input', isTyping));

  signUpSlide.addEventListener('click', clearForm);
  signUpSpan.addEventListener('click', clearForm);

  signInSubmit.addEventListener('click', (event) => {
    event.preventDefault();
    if (isValidForm()) {
      const user = users.find(user => user.email === email.value);

      if (user) {
        // guarda o usuário logado localmente.
        sessionStorage.setItem('loggedUser', JSON.stringify(user));
        // redireciona para outra página.
        window.location.href = "/public/pages/profile.html";
      }
    }
  });
}
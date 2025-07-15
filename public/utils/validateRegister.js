import users from "./users.js";

export default function validateRegister() {
  const inputUsername = document.querySelector('.input-username');
  const inputEmail = document.querySelector('.input-email');
  const inputPassword = document.querySelector('.input-password');
  const inputConfirmPassword = document.querySelector('.input-confirm-password');
  
  // valor dos inputs.
  const username = document.getElementById('username');
  const email = document.getElementById('email');
  const password = document.getElementById('password');
  const confirmPassword = document.getElementById('confirm-password');
  const inputs = document.querySelectorAll('.input-area input');

  const signUpSubmit = document.getElementById('sign-up-submit');
  const signInSlide = document.querySelector('.sign-in-btn');
  
  // limpa o formulário ao fazer o slide.
  const clearForm = () => {
    const inputArea = document.querySelectorAll('.input-area');
    const inputError = document.querySelectorAll('.input-error');

    inputArea.forEach(i => i.classList.remove('invalid'));
    inputError.forEach(i => i.classList.remove('error'));
    inputs.forEach(i => i.value = "");
  }
  
  // validação do nome de usuário.
  const isValidateUsername = () => {
    // pega todos os nomes de usuário já cadastrados.
    const registeredUsernames = users.map(user => user.username);

    inputUsername.classList.add('invalid');
    
    // se estiver vazio.
    if (username.value == "") {
      return false;
    }

    // se já incluso nos cadastros.
    if (registeredUsernames.includes(username.value)) {
      return false;
    }

    if (!/^[a-zA-Z0-9._]+$/.test(username.value) || /\s/.test(username.value)) {
      return false;
    }

    inputUsername.classList.remove('invalid');
    return true;
  }

  // validação do email.
  const isValidateEmail = () => {
    // expressão do email.
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // pega todos os emails já cadastrados.
    const registeredEmails = users.map(user => user.email);

    inputEmail.classList.add('invalid');

    // se estiver vazio.
    if (email.value == "") {   
      return false;
    }

    // se não passar no teste.
    if (!emailRegex.test(email.value) && email.value != "") {
      return false;
    }

    // se já incluso nos cadastros.
    if (registeredEmails.includes(email.value)) {
      return false;
    }

    inputEmail.classList.remove('invalid');
    return true;
  };
  
  // validação da senha.
  const isValidatePassword = () => {
    let errors = [];

    inputPassword.classList.add('invalid');

    // verifica se há número.
    if (!/[0-9]/.test(password.value)) errors.push("number");

    // verifica se há caractere especial.
    if (!/[!@#$%^&*]/.test(password.value)) errors.push("special character");

    // verifica se há letra maiúscula.
    if (!/[A-Z]/.test(password.value)) errors.push("upper case");
    
    // se estiver vazio.
    if (email.value == "") {
      return false;
    }

    // se houver pelo um erro.
    if (errors.length > 0) {
      return false;
    }

    inputPassword.classList.remove('invalid');
    return true;
  }

  // verifica se as senhas são iguais.
  const equalPassword = () => {
    inputConfirmPassword.classList.add('invalid');

    // se estiver vazio.
    if (confirmPassword.value == "") {
      return false;
    }

    // se as senhas forem diferentes.
    if (password.value !== confirmPassword.value) {
      return false;
    }

    inputConfirmPassword.classList.remove('invalid');
    return true;
  }
  
  // verifica se tá tudo certo.
  const isValidForm = () => {
    const validUsername = isValidateUsername();
    const validEmail = isValidateEmail();
    const validPassword = isValidatePassword();
    const passwordsMatch = equalPassword();
    
    return validUsername && validEmail && validPassword && passwordsMatch;
  }

  signUpSubmit.addEventListener('click', (event) => {
    event.preventDefault();
    if (isValidForm()) {
      let newUser = {
        name: "", 
        username: username.value, 
        email: email.value, 
        password: password.value
      };

      users.push(newUser);
      sessionStorage.setItem('loggedUser', JSON.stringify(newUser));
      sessionStorage.setItem('justRegistered', 'true');
      window.location.href = "./profile.html";
    }
  });

  signInSlide.addEventListener('click', clearForm);
}
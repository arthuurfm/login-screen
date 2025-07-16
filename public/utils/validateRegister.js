import users from "./users.js";
import newError from "./newError.js";

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
  const signInSpan = document.querySelector('.sign-in-container span b');

  // limpa o formulário ao fazer o slide.
  const clearForm = () => {
    const inputArea = document.querySelectorAll('.input-area');
    const errors = document.querySelectorAll('.error');

    inputArea.forEach(i => i.classList.remove('invalid'));
    errors.forEach(e => e.remove());
    inputs.forEach(i => i.value = "");
  }
  
  // validação do nome de usuário.
  const isValidateUsername = () => {
    // pega todos os nomes de usuário já cadastrados.
    const registeredUsernames = users.map(user => user.username);

    newError(inputUsername);
    inputUsername.classList.add('invalid');
    
    // se estiver vazio.
    if (username.value == "") {
      newError(inputUsername).textContent = "Can't be empty.";
      return false;
    }

    // se já incluso nos cadastros.
    if (registeredUsernames.includes(username.value)) {
      newError(inputUsername).textContent = "Username already registered.";
      return false;
    }

    if (!/^[a-zA-Z0-9._]+$/.test(username.value) || /\s/.test(username.value)) {
      newError(inputUsername).textContent = "Invalid characters."; 
      return false;
    }

    inputUsername.classList.remove('invalid');
    newError(inputUsername).remove();
    return true;
  }

  // validação do email.
  const isValidateEmail = () => {
    // expressão do email.
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // pega todos os emails já cadastrados.
    const registeredEmails = users.map(user => user.email);

    newError(inputEmail);
    inputEmail.classList.add('invalid');

    // se estiver vazio.
    if (email.value == "") {   
      newError(inputEmail).textContent = "Can't be empty.";
      return false;
    }

    // se não passar no teste.
    if (!emailRegex.test(email.value) && email.value != "") {
      newError(inputEmail).textContent = "Invalid email.";
      return false;
    }

    // se já incluso nos cadastros.
    if (registeredEmails.includes(email.value)) {
      newError(inputEmail).textContent = "Email already registered.";
      return false;
    }

    inputEmail.classList.remove('invalid');
    newError(inputEmail).remove();
    return true;
  };
  
  // validação da senha.
  const isValidatePassword = () => {
    let errors = [];

    newError(inputPassword);
    inputPassword.classList.add('invalid');

    // verifica se há número.
    if (!/[0-9]/.test(password.value)) errors.push("number");

    // verifica se há caractere especial.
    if (!/[!@#$%^&*]/.test(password.value)) errors.push("special character");

    // verifica se há letra maiúscula.
    if (!/[A-Z]/.test(password.value)) errors.push("upper case");
    
    // se estiver vazio.
    if (password.value == "") {
      newError(inputPassword).textContent = "Can't be empty.";
      return false;
    }

    // se houver pelo um erro.
    if (errors.length > 0) {
      newError(inputPassword).textContent = `Must be include: ${errors.join(", ")}.`;
      return false;
    }

    inputPassword.classList.remove('invalid');
    newError(inputPassword).remove();
    return true;
  }

  // verifica se as senhas são iguais.
  const equalPassword = () => {
    newError(inputConfirmPassword);
    inputConfirmPassword.classList.add('invalid');

    // se estiver vazio.
    if (confirmPassword.value == "") {
      newError(inputConfirmPassword).textContent = "Can't be empty";
      return false;
    }

    // se as senhas forem diferentes.
    if (password.value !== confirmPassword.value) {
      newError(inputConfirmPassword).textContent = "Passwords don't match.";
      return false;
    }

    inputConfirmPassword.classList.remove('invalid');
    newError(inputConfirmPassword).remove();
    return true;
  }
  
  password.addEventListener('input', () => {
    if (password.value == "") newError(inputPassword).remove();
    else isValidatePassword();
  });

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
      window.location.href = "pages/profile.html";
    }
  });

  signInSlide.addEventListener('click', clearForm);
  signInSpan.addEventListener('click', clearForm);
}
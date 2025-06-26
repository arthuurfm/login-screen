import users from "./users.js";

export default function validateRegister() {
  const inputUsername = document.querySelector('.input-username');
  const inputEmail = document.querySelector('.input-email');
  const inputPassword = document.querySelector('.input-password');
  const inputConfirmPassword = document.querySelector('.input-confirm-password');

  // texto de erro.
  const usernameError = document.querySelector('.input-username .input-error');
  const emailError = document.querySelector('.input-email .input-error');
  const passwordError = document.querySelector('.input-password .input-error');
  const confirmPasswordError = document.querySelector('.input-confirm-password .input-error');
  
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
    const error = usernameError.querySelector('span');

    inputUsername.classList.add('invalid');
    usernameError.classList.add('error');
    
    // se estiver vazio.
    if (username.value == "") {
      error.textContent = "This field must not be empty.";
      return false;
    }

    // se já incluso nos cadastros.
    if (registeredUsernames.includes(username.value)) {
      error.textContent = "Username already registered.";
      return false;
    }

    if (!/^[a-zA-Z0-9._]+$/.test(username.value) || /\s/.test(username.value)) {
      error.textContent = "Only letters, numbers, '.' and '_' allowed.";
      return false;
    }

    inputUsername.classList.remove('invalid');
    usernameError.classList.remove('error');
    error.textContent = "";
    return true;
  }

  // validação do email.
  const isValidateEmail = () => {
    // expressão do email.
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // pega todos os emails já cadastrados.
    const registeredEmails = users.map(user => user.email);
    const error = emailError.querySelector('span');

    inputEmail.classList.add('invalid');
    emailError.classList.add('error');

    // se estiver vazio.
    if (email.value == "") {  
      error.textContent = "This field must not be empty.";  
      return false;
    }

    // se não passar no teste.
    if (!emailRegex.test(email.value) && email.value != "") {
      error.textContent = "Invalid Email.";
      return false;
    }

    // se já incluso nos cadastros.
    if (registeredEmails.includes(email.value)) {
      error.textContent = "Email already registered.";
      return false;
    }

    inputEmail.classList.remove('invalid');
    emailError.classList.remove('error');
    error.textContent = "";
    return true;
  };
  
  // validação da senha.
  const isValidatePassword = () => {
    const error = passwordError.querySelector('span');
    let errors = [];

    inputPassword.classList.add('invalid');
    passwordError.classList.add('error');

    // verifica se há número.
    if (!/[0-9]/.test(password.value)) errors.push("number");

    // verifica se há caractere especial.
    if (!/[!@#$%^&*]/.test(password.value)) errors.push("special character");

    // verifica se há letra maiúscula.
    if (!/[A-Z]/.test(password.value)) errors.push("upper case");
    
    // se estiver vazio.
    if (email.value == "") {
      error.textContent = "This field must not be empty.";
      return false;
    }

    // se houver pelo um erro.
    if (errors.length > 0) {
      error.textContent = `Missing: ${errors.join(", ")}`;
      return false;
    }

    inputPassword.classList.remove('invalid');
    passwordError.classList.remove('error');
    error.textContent = "";
    return true;
  }

  // verifica se as senhas são iguais.
  const equalPassword = () => {
    const error = confirmPasswordError.querySelector('span');
    inputConfirmPassword.classList.add('invalid');
    confirmPasswordError.classList.add('error');

    // se estiver vazio.
    if (confirmPassword.value == "") {
      error.textContent = "This field must not be empty.";
      return false;
    }

    // se as senhas forem diferentes.
    if (password.value !== confirmPassword.value) {
      error.textContent = "Passwords don't match.";
      return false;
    }

    inputConfirmPassword.classList.remove('invalid');
    confirmPasswordError.classList.remove('error');
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
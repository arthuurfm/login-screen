import users from "./users.js";

export default function validateForm() {
  const inputUsername = document.querySelector('.input-username');
  const inputEmail = document.querySelector('.input-email');
  const inputPassword = document.querySelector('.input-password');
  const inputConfirmPassword = document.querySelector('.input-confirm-password');

  const usernameError = document.querySelector('.input-username .input-error');
  const emailError = document.querySelector('.input-email .input-error');
  const passwordError = document.querySelector('.input-password .input-error');
  const confirmPasswordError = document.querySelector('.input-confirm-password .input-error');
  
  const username = document.getElementById('username');
  const email = document.getElementById('email');
  const password = document.getElementById('password');
  const confirmPassword = document.getElementById('confirm-password');
  
  // validação do nome de usuário.
  const isValidateUsername = () => {
    // pega todos os nomes de usuário já cadastrados.
    const registeredUsernames = users.map(user => user.username);

    if (!registeredUsernames.includes(username.value) || username.value == "") {
      const error = usernameError.querySelector('span');
      inputUsername.classList.remove('invalid');
      usernameError.classList.remove('error');
      error.textContent = "Username already registered.";
    } else {
      const error = usernameError.querySelector('span');
      inputUsername.classList.add('invalid');
      usernameError.classList.add('error');
      if (registeredUsernames.includes(username.value)) {
        error.textContent = "Username already registered.";
      }
    }
  }

  // validação do email.
  const isValidateEmail = () => {
    // expressão do email.
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // pega todos os emails já cadastrados.
    const registeredEmails = users.map(user => user.email);

    if (emailRegex.test(email.value) || email.value == "") {
      inputEmail.classList.remove('invalid');
      emailError.classList.remove('error');
      if (registeredEmails.includes(email.value)) {
        const error = emailError.querySelector('span');
        inputEmail.classList.add('invalid');
        emailError.classList.add('error');
        error.textContent = "Email already registered.";
      } 
    } else if (!emailRegex.test(email.value) && email.value != "") {
      const error = emailError.querySelector('span');
      inputEmail.classList.add('invalid');
      emailError.classList.add('error');
      error.textContent = "Invalid Email.";
    }
  };
  
  // validação da senha.
  const isValidatePassword = () => {
    // expressão da senha.
    const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[A-Z])[a-zA-Z0-9!@#$%^&*]{8,24}$/;

    if (passwordRegex.test(password.value) || password.value == "") {
      inputPassword.classList.remove('invalid');
      passwordError.classList.remove('error');
    } else if (!passwordRegex.test(password.value) && password.value != "") {
      inputPassword.classList.add('invalid');
      passwordError.classList.add('error');
      const error = passwordError.querySelector('span');

      if (password.value.search(/[0-9]/)) error.textContent = "Need a number.";
      if (password.value.search(/[!@#$%^&*]/)) error.textContent = "Need a special caracter.";
      if (password.value.search(/[A-Z]/)) error.textContent = "Need a upper case.";
    }
  }

  // verifica se as senhas são iguais.
  const equalPassword = () => {
    if (password.value === confirmPassword.value || confirmPassword.value == "") {
      inputConfirmPassword.classList.remove('invalid');
      confirmPasswordError.classList.remove('error');
    } else if (password.value !== confirmPassword.value && confirmPassword.value != "") {
      inputConfirmPassword.classList.add('invalid');
      confirmPasswordError.classList.add('error');
      const error = confirmPasswordError.querySelector('span');
      error.textContent = "Passwords do not match.";
    }
  }
  
  username.addEventListener('input', isValidateUsername);
  email.addEventListener('input', isValidateEmail);
  password.addEventListener('input', isValidatePassword);
  confirmPassword.addEventListener('input', equalPassword);
}
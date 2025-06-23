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

  const signUpSubmit = document.getElementById('sign-up-submit');
  
  // validação do nome de usuário.
  const isValidateUsername = () => {
    // pega todos os nomes de usuário já cadastrados.
    const registeredUsernames = users.map(user => user.username);

    if (!registeredUsernames.includes(username.value)) {
      inputUsername.classList.remove('invalid');
      usernameError.classList.remove('error');
      return true;
    } else {
      const error = usernameError.querySelector('span');

      if (registeredUsernames.includes(username.value)) {
        error.textContent = "Username already registered.";
      }

      inputUsername.classList.add('invalid');
      usernameError.classList.add('error');
      return false;
    }
  }

  // validação do email.
  const isValidateEmail = () => {
    // expressão do email.
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // pega todos os emails já cadastrados.
    const registeredEmails = users.map(user => user.email);

    if (emailRegex.test(email.value)) {
      if (registeredEmails.includes(email.value)) {
        const error = emailError.querySelector('span');
        inputEmail.classList.add('invalid');
        emailError.classList.add('error');
        error.textContent = "Email already registered.";
        return false;
      }

      inputEmail.classList.remove('invalid');
      emailError.classList.remove('error');
      return true;
    } else if (!emailRegex.test(email.value) && email.value != "") {
      const error = emailError.querySelector('span');
      inputEmail.classList.add('invalid');
      emailError.classList.add('error');
      error.textContent = "Invalid Email.";
      return false;
    }
  };
  
  // validação da senha.
  const isValidatePassword = () => {
    // expressão da senha.
    const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[A-Z])[a-zA-Z0-9!@#$%^&*]{8,24}$/;

    if (passwordRegex.test(password.value)) {
      inputPassword.classList.remove('invalid');
      passwordError.classList.remove('error');
      return true;
    } else {
      inputPassword.classList.add('invalid');
      passwordError.classList.add('error');
      const error = passwordError.querySelector('span');
      let errors = [];

      if (!/[0-9]/.test(password.value)) {
        errors.push("number");
      }

      if (!/[!@#$%^&*]/.test(password.value)) {
        errors.push("special character");
      }

      if (!/[A-Z]/.test(password.value)) {
        errors.push("upper case");
      } 
      
      if (errors.length > 0) {
        error.textContent = `Missing: ${errors.join(", ")}`;
        return false;
      } else {
        inputPassword.classList.remove('invalid');
        passwordError.classList.remove('error');
        return true;
      }
    }
  }

  // verifica se as senhas são iguais.
  const equalPassword = () => {
    if (password.value === confirmPassword.value) {
      inputConfirmPassword.classList.remove('invalid');
      confirmPasswordError.classList.remove('error');
      return true;
    } else if (password.value !== confirmPassword.value && confirmPassword.value != "") {
      inputConfirmPassword.classList.add('invalid');
      confirmPasswordError.classList.add('error');
      const error = confirmPasswordError.querySelector('span');
      error.textContent = "Passwords don't match.";
      return false;
    }
  }

  // verifica se tá tudo certo.
  const isFormValid = () => {
    const validUsername = isValidatePassword();
    const validEmail = isValidateEmail();
    const validPassword = isValidatePassword();
    const passwordsMatch = equalPassword();

    console.log(validUsername)
    console.log(validEmail)
    console.log(validPassword)
    console.log(passwordsMatch)
    
    return validUsername && validEmail && validPassword && passwordsMatch;
  }
  
  username.addEventListener('input', isValidateUsername);
  email.addEventListener('input', isValidateEmail);
  password.addEventListener('input', isValidatePassword);
  confirmPassword.addEventListener('input', equalPassword);

  signUpSubmit.addEventListener('click', (event) => {
    event.preventDefault();
    if (isFormValid()) {
      console.log("Conta criada com sucesso.");
    } else {
      console.log("Formulário inválido.");
    }
  });
}
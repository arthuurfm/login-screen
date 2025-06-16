export default function validateForm() {
  const inputEmail = document.querySelector('.input-email');
  const inputPassword = document.querySelector('.input-password');
  const inputConfirmPassword = document.querySelector('.input-confirm-password');

  const emailError = document.querySelector('.input-email .input-error');
  const passwordError = document.querySelector('.input-password .input-error');
  const confirmPasswordError = document.querySelector('.input-confirm-password .input-error');
  
  const email = document.getElementById('email');
  const password = document.getElementById('password');
  const confirmPassword = document.getElementById('confirm-password');
  
  // validação do email.
  const isValidateEmail = () => {
    // expressão do email.
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailRegex.test(email.value) || email.value == "") {
      inputEmail.classList.remove('invalid');
      emailError.classList.remove('error');
    } else if (!emailRegex.test(email.value) && email.value != "") {
      inputEmail.classList.add('invalid');
      emailError.classList.add('error');
      const error = emailError.querySelector('span');
      error.textContent = "Invalid Email";
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
      error.textContent = "Invalid Password";
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

  email.addEventListener('input', isValidateEmail);
  password.addEventListener('input', isValidatePassword);
  confirmPassword.addEventListener('input', equalPassword);
}
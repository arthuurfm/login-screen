import users from './users.js'

export default function validateEditProfile(user) {
  // valor dos inputs.
  const username = document.getElementById('username');
  const name = document.getElementById('name');
  const newPassword = document.getElementById('new-password');
  const confirmNewPassword = document.getElementById('confirm-new-password');
  
  const confirmChanges = document.querySelector('.confirm-changes');

  // validação do nome de usuário.
  const isValidateUsername = () => {
    const registeredUsernames = users.map(user => user.username);
    
    const inputUsername = document.querySelector('.input-username');
    inputUsername.classList.add('invalid');

    // se já incluso nos cadastros.
    if (registeredUsernames.includes(username.value)) return false;

    // padrão do username.
    if (!/^[a-zA-Z0-9._]+$/.test(username.value) || /\s/.test(username.value)) return false;

    // se não é igual ao anterior.
    if (username.value == user.username) return false;

    inputUsername.classList.remove('invalid');
    return true;
  }

  const isValidateName = () => {
    const inputName = document.querySelector('.input-name');
    inputName.classList.add('invalid');

    if (name.value == user.name) return false;

    inputName.classList.remove('invalid');
    return true;
  }
  
  // validação da senha.
  const isValidatePassword = () => {
    const inputNewPassword = document.querySelector('.input-new-password');
    inputNewPassword.classList.add('invalid');

    // verifica se há número.
    if (!/[0-9]/.test(newPassword.value)) errors.push("number");

    // verifica se há caractere especial.
    if (!/[!@#$%^&*]/.test(newPassword.value)) errors.push("special character");

    // verifica se há letra maiúscula.
    if (!/[A-Z]/.test(newPassword.value)) errors.push("upper case");

    // se houver pelo um erro.
    if (errors.length > 0) return false;
    
    inputNewPassword.classList.remove('invalid');
    return true;
  }

  // verifica se as senhas são iguais.
  const equalPassword = () => {
    const inputConfirmNewPassword = document.querySelector('.input-confirm-new-password');
    inputConfirmNewPassword.classList.add('invalid');

    // se as senhas forem diferentes.
    if (newPassword.value !== confirmNewPassword.value) return false;

    inputConfirmNewPassword.classList.remove('invalid');
    return true;
  }

  const isValidForm = () => {
    return isValidateUsername() && isValidateName() && isValidatePassword() && equalPassword();
  }
}
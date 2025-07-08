import editProfile from "../components/editProfile.js";
import header from "../components/header.js";
import validateEditProfile from "../utils/validateEditProfile.js";

const loggedUser = sessionStorage.getItem('loggedUser');
const user = JSON.parse(loggedUser);

const profileContent = document.querySelector('.profile-content');
const editBtn = document.querySelector('.edit-profile-btn');

header(user);
document.querySelector('.banner h1').textContent = user.name;
document.querySelector('.banner span').textContent = user.bio;
document.querySelector('.profile-area img').src = user.picture;
document.querySelector('.profile-area h2').textContent = `@${user.username}`;

// cria o componente de editar perfil.
editBtn.addEventListener('click', () => {
  profileContent.innerHTML = editProfile(user);
  // botão de cancelar sai da edição do perfil.
  const cancelChanges = profileContent.querySelector('.cancel-changes');
  cancelChanges.addEventListener('click', () => profileContent.innerHTML = "");

  // contador de caractéres do nome.
  const nameCharCount = profileContent.querySelector('.name-char-count');
  const inputName = profileContent.querySelector('#name');
  inputName.addEventListener('input', () => {
    const currentLength = inputName.value.length;
    nameCharCount.textContent = `${currentLength}/50`;
  });

  // contador de caractéres da biografia.
  const bioCharCount = profileContent.querySelector('.bio-char-count');
  const inputBio = profileContent.querySelector('#biography');
  inputBio.addEventListener('input', () => {
    const currentLength = inputBio.value.length;
    bioCharCount.textContent = `${currentLength}/250`;
  });

  validateEditProfile(user);
});
import editProfile from "../components/editProfile.js";
import header from "../components/header.js";
import validateEditProfile from "../utils/validateEditProfile.js";

const loggedUser = sessionStorage.getItem('loggedUser');

// se não logado, volta para a tela de login.
if (!loggedUser) {
  window.location.href = "./login.html";
}

const user = JSON.parse(loggedUser);
const profileContent = document.querySelector('.profile-content');

header(user);
document.querySelector('.banner h1').textContent = user.name;
document.querySelector('.banner span').textContent = user.bio;
// desktop e tablet.
document.querySelector('.profile-area h2').textContent = `@${user.username}`;
document.querySelector('.profile-area img').src = user.picture;
// mobile.
document.querySelector('.profile-area-mobile img').src = user.picture;
document.querySelector('.profile-area-mobile h2').textContent = `@${user.username}`;

profileContent.innerHTML = editProfile(user);
// contador de caractéres do nome.
const nameCharCount = profileContent.querySelector('.name-char-count');
const inputName = profileContent.querySelector('#name');
nameCharCount.textContent = `${inputName.value.length}/50`;
inputName.addEventListener('input', () => {
  const currentLength = inputName.value.length;
  nameCharCount.textContent = `${currentLength}/50`;
});

// contador de caractéres da biografia.
const bioCharCount = profileContent.querySelector('.bio-char-count');
const inputBio = profileContent.querySelector('#biography');
bioCharCount.textContent = `${inputBio.value.length}/50`;
inputBio.addEventListener('input', () => {
  const currentLength = inputBio.value.length;
  bioCharCount.textContent = `${currentLength}/250`;
});

validateEditProfile(user);
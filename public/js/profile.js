import editProfile from "../components/editProfile.js";
import header from "../components/header.js";

const loggedUser = sessionStorage.getItem('loggedUser');
const user = JSON.parse(loggedUser);

const profileContent = document.querySelector('.profile-content');
const editBtn = document.querySelector('.edit-profile-btn');

document.querySelector('.banner h1').textContent = user.name;
document.querySelector('.banner span').textContent = user.bio;
document.querySelector('.profile-area img').src = user.picture;
document.querySelector('.profile-area h2').textContent = `@${user.username}`;

header(user);
editBtn.addEventListener('click', () => {
  profileContent.innerHTML = editProfile(user);
  const cancelChanges = profileContent.querySelector('.cancel-changes');
  cancelChanges.addEventListener('click', () => profileContent.innerHTML = "");
});
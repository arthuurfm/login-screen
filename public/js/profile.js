import header from "../components/header.js";

const loggedUser = sessionStorage.getItem('loggedUser');
const user = JSON.parse(loggedUser);

header(user);

document.querySelector('.banner h1').textContent = user.name;
document.querySelector('.banner span').textContent = 'blablabla';
document.querySelector('.profile-area img').src = user.picture;
document.querySelector('.profile-area h2').textContent = `@${user.username}`
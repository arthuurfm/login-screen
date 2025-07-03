import header from "../components/header.js";

const loggedUser = sessionStorage.getItem('loggedUser');

const user = JSON.parse(loggedUser);

header(user);
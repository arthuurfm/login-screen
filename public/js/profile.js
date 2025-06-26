const welcome = document.querySelector('.welcome span');
const loggedUser = sessionStorage.getItem('loggedUser');
const justRegistered = sessionStorage.getItem('justRegistered');

if (loggedUser) {
  const user = JSON.parse(loggedUser);
  
  if (justRegistered) {
    welcome.textContent = `Welcome , @${user.username}.`;
    sessionStorage.removeItem('justRegistered');
  } else {
    welcome.textContent = `Welcome back, @${user.username}.`;
  }
}
import showPassword from "../components/showPassword.js";
import slideControl from "../components/slideControl.js";
import validateLogin from "../utils/validateLogin.js";
import validateRegister from "../utils/validateRegister.js";

const linkedinIcons = document.querySelectorAll('.linkedin-icon');
linkedinIcons.forEach(i => {
  i.addEventListener('click', () => {
    window.open("https://www.linkedin.com/in/arthur-franz-178a79243/", "_blank")
  });
});

const gitIcons = document.querySelectorAll('.google-icon');
gitIcons.forEach(i => {
  i.addEventListener('click', () => {
    window.open("https://github.com/arthuurfm", "_blank")
  });
});

const instaIcons = document.querySelectorAll('.facebook-icon');
instaIcons.forEach(i => {
  i.addEventListener('click', () => {
    window.open("https://www.instagram.com/arthuur.fm/", "_blank")
  });
});


slideControl();
validateRegister();
validateLogin();
showPassword();
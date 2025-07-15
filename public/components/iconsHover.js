export default function iconsHover() {
  const facebookIcons = document.querySelectorAll('.facebook-icon');
  const googleIcons = document.querySelectorAll('.google-icon');
  const linkedinIcons = document.querySelectorAll('.linkedin-icon');
  
  // hover em todos os ícones do facebook.
  facebookIcons.forEach(icon => {
    const img = icon.querySelector('img');

    if (window.innerWidth <= 768) {
      document.querySelector('.sign-in-container .icons-area .facebook-icon img').src = "../img/dark-facebook-icon.png";
    } else {
      document.querySelector('.sign-in-container .icons-area .facebook-icon img').src = "../img/facebook-icon.png";
      
      icon.addEventListener('mouseover', () => {
        img.src = "../img/dark-facebook-icon.png";
      });

      icon.addEventListener('mouseleave', () => {
        img.src = "../img/facebook-icon.png";
      });
    }
  });
  
  // hover em todos os ícones do google.
  googleIcons.forEach(icon => {
    const img = icon.querySelector('img');

    if (window.innerWidth <= 768) {
      document.querySelector('.sign-in-container .icons-area .google-icon img').src = "../img/dark-google-icon.png";
    } else {
      document.querySelector('.sign-in-container .icons-area .google-icon img').src = "../img/google-icon.png";
      icon.addEventListener('mouseover', () => {
        img.src = "../img/dark-google-icon.png";
      });

      icon.addEventListener('mouseleave', () => {
        img.src = "../img/google-icon.png";
      });
    }
  });

  // hover em todos os ícones do linkedin.
  linkedinIcons.forEach(icon => {
    const img = icon.querySelector('img');

    if (window.innerWidth <= 768) {
      document.querySelector('.sign-in-container .icons-area .linkedin-icon img').src = "../img/dark-linkedin-icon.png";
    } else {
      document.querySelector('.sign-in-container .icons-area .linkedin-icon img').src = "../img/linkedin-icon.png";
      icon.addEventListener('mouseover', () => {
        img.src = "../img/dark-linkedin-icon.png";
      });

      icon.addEventListener('mouseleave', () => {
        img.src = "../img/linkedin-icon.png";
      });
    }

  });
}
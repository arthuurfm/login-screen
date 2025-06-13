export default function iconsHover() {
  const facebookIcon = document.querySelector('.facebook-icon');
  const googleIcon = document.querySelector('.google-icon');
  const linkedinIcon = document.querySelector('.linkedin-icon');

  facebookIcon.addEventListener('mouseover', () => {
    const icon = facebookIcon.querySelector("img");
    icon.src = "./img/dark-facebook-icon.png";
  });

  facebookIcon.addEventListener('mouseleave', () => {
    const icon = facebookIcon.querySelector("img");
    icon.src = "./img/facebook-icon.png";
  });
  
  googleIcon.addEventListener('mouseover', () => {
    const icon = googleIcon.querySelector("img");
    icon.src = "./img/dark-google-icon.png";
  });

  googleIcon.addEventListener('mouseleave', () => {
    const icon = googleIcon.querySelector("img");
    icon.src = "./img/google-icon.png";
  });

  linkedinIcon.addEventListener('mouseover', () => {
    const icon = linkedinIcon.querySelector("img");
    icon.src = "./img/dark-linkedin-icon.png";
  });

  linkedinIcon.addEventListener('mouseleave', () => {
    const icon = linkedinIcon.querySelector("img");
    icon.src = "./img/linkedin-icon.png";
  });
}
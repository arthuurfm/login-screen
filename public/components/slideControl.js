export default function slideControl() {
  const signInBtn = document.querySelector('.sign-in-btn');
  const signUpBtn = document.querySelector('.sign-up-btn');
  const container = document.querySelector('.container');
  const form = document.querySelector('.form-container');
  const welcome = document.querySelector('.welcome-container');

  signInBtn.addEventListener('click', () => {
    container.classList.add('active');
    form.classList.add('hidden');
    welcome.classList.add('hidden');

    setTimeout(() => {
      form.classList.remove('hidden');
      welcome.classList.remove('hidden');
    }, 550);
  });

  signUpBtn.addEventListener('click', () => {
    container.classList.remove('active');
  });
}
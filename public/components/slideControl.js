export default function slideControl() {
  const signInBtn = document.querySelector('.sign-in-btn');
  const signUpBtn = document.querySelector('.sign-up-btn');

  const container = document.querySelector('.container');

  const formSignIn = document.querySelector('.sign-in-container');
  const formSignUp = document.querySelector('.sign-up-container');
  const welcomeSignIn = document.querySelector('.welcome-sign-in');
  const welcomeSignUp = document.querySelector('.welcome-sign-up');

  // mostra o form de login
  const showSignIn = () => {
    formSignUp.classList.add('hide');
    welcomeSignUp.classList.add('hide');
    formSignIn.classList.remove('hide');
    welcomeSignIn.classList.remove('hide');
  }

  // mostra o form de register
  const showSignUp = () => {
    formSignIn.classList.add('hide');
    welcomeSignIn.classList.add('hide');
    formSignUp.classList.remove('hide');
    welcomeSignUp.classList.remove('hide');
  }

  // ao clicar no botão de sign in.
  signInBtn.addEventListener('click', () => {
    container.classList.add('active');
    formSignUp.classList.add('hidden');
    welcomeSignUp.classList.add('hidden');

    setTimeout(() => {
      formSignUp.classList.remove('hidden');
      welcomeSignUp.classList.remove('hidden');
      showSignIn();
    }, 450);
  });

  // ao clicar no botão de sign up.
  signUpBtn.addEventListener('click', () => {
    container.classList.remove('active');
    formSignIn.classList.add('hidden');
    welcomeSignIn.classList.add('hidden');

    setTimeout(() => {
      formSignIn.classList.remove('hidden');
      welcomeSignIn.classList.remove('hidden');
      showSignUp();
    }, 450);
  });
}
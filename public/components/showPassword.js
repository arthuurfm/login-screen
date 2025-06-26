export default function showPassword() {
  const inputs = document.querySelectorAll('.input-area');

  inputs.forEach(i => {
    const passwordInput = i.querySelector('input[type="password"]');
    const icon = i.querySelector('.show-password');

    if (passwordInput && icon) {
      // impede o efeito de "piscada" no foco.
      icon.addEventListener('mousedown', (e) => {
        e.preventDefault();
      });

      icon.addEventListener('click', () => {
        if (!icon.classList.contains('show')) {
          icon.classList.add('show');
          passwordInput.type = 'text';
        } else {
          icon.classList.remove('show');
          passwordInput.type = 'password';
        }
      });
    }
  });
}
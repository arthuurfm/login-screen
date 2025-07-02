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
        const showing = icon.classList.toggle('show');
        passwordInput.type = showing ? 'text' : 'password';
      });
      
      const updateVisibility = () => {
        if (document.activeElement === passwordInput || passwordInput.value !== '') {
          i.classList.add('active');
        } else {
          i.classList.remove('active');
        }
      };

      // todas as possibilidades
      ['input', 'blur', 'focus'].forEach(e =>
        passwordInput.addEventListener(e, updateVisibility)
      );

      updateVisibility(); // inicial
    }
  });
}
export default function header(user) {
  const header = document.createElement('header');
  const isLogged = user && user.name && user.picture;
  if (isLogged) {
    header.innerHTML = `
      <nav class="nav-bar">
        <div class="explore-area">
          <span>STORE</span>
          <span>LIBRARY</span>
          <span>COMMUNITY</span>
        </div>
        <div>
          <div class="profile-area">
            <span>${user.name}</span>
            <div class="profile-img">
              <img src="${user.picture}">
            </div>
            <div class="profile-options">
              <div>My Profile</div>
              <div id="logout">Logout</div>
            </div>
          </div>
        </div>
      </nav>
  `;

  window.addEventListener('DOMContentLoaded', () => {
    const profileOptions = document.querySelector('.profile-options');
    const count = profileOptions.querySelectorAll('div').length;
    profileOptions.style.bottom = `-${35 * count + 2}px`;

    const profileArea = document.querySelector('.profile-area');
    profileArea.addEventListener('click', () => {
      profileOptions.classList.toggle('show');
    });

    const logout = document.getElementById('logout');
    logout.addEventListener('click', () => window.location.href = './login.html')
  });

  } else {
    header.innerHTML = `
      <nav class="nav-bar">
        <div class="explore-area">
          <span>STORE</span>
          <span>LIBRARY</span>
          <span>COMMUNITY</span>
        </div>
        <div>
          <a href="login.html">
            <div class="login-area">
              <span>Login / Register</span>
            </div>
          </a>
        </div>
      </nav>
  `;
  }
  // Apaga header antigo, se já existir
  const existingHeader = document.querySelector('header');
  if (existingHeader) existingHeader.remove();
  
  document.body.prepend(header);
}
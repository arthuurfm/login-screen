export default function header(user) {
  const header = document.createElement('header');
  const isLogged = user && user.name && user.picture;
  if (isLogged) {
    header.innerHTML = `
    <header>
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
          </div>
        </div>
      </nav>
    </header>
  `;
  } else {
    header.innerHTML = `
    <header>
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
    </header>
  `;
  }
  // Apaga header antigo, se já existir
  const existingHeader = document.querySelector('header');
  if (existingHeader) existingHeader.remove();
  document.body.prepend(header);
}
export default function header(user) {
  const header = document.createElement('body');
  const isLogged = (user) => {
    if (!user || "") {
      return "name";
    } else {
      return user;
    }
  }
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
          <span>${isLogged(user.name)}</span>
            <div class="profile-img">
              <img src="${isLogged(user.picture)}">
            </div>
          </div>
        </div>
      </nav>
    </header>
  `;
  document.body.appendChild(header);
}
export default function header(user) {
  const header = document.createElement('header');
  header.innerHTML = `
    <nav class="nav-bar">
      <div class="explore-area">
        <span>STORE</span>
        <span>COMMUNITY</span>
      </div>
      <div>
        <div class="profile-icon">
          <span>${user.name}</span>
          <div class="profile-img">
            <img src="${user.picture}">
          </div>
          <div class="profile-options">
            <div id="my-profile">My Profile</div>
            <div id="logout">Logout</div>
          </div>
        </div>
      </div>
    </nav>
  `;

  window.addEventListener('DOMContentLoaded', () => {
    const profileOptions = document.querySelector('.profile-options');

    const profileIcon = document.querySelector('.profile-icon');
    profileIcon.addEventListener('click', (e) => {
      e.stopPropagation();
      profileOptions.classList.toggle('show');
    });

    const logout = document.getElementById('logout');
    logout.addEventListener('click', () => {
      sessionStorage.removeItem('loggedUser');
      window.location.href = '../../index.html';
    });

    const myProfile = document.getElementById('my-profile');
    myProfile.addEventListener('click', () => window.location.href = './profile.html');
  });

  // Apaga header antigo, se já existir
  const existingHeader = document.querySelector('header');
  if (existingHeader) existingHeader.remove();
  
  document.body.prepend(header);
}
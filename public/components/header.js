export default function header() {
  const header = document.createElement('body');
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
            <div class="profile-img">
              <img src="https://www.giantbomb.com/a/uploads/original/5/56742/3058593-arthur_portrait.jpg">
            </div>
            <span>arthur morgan</span>
          </div>
        </div>
      </nav>
    </header>
  `;
  document.body.appendChild(header);
}
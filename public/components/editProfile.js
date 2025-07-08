export default function editProfile(user) {
  return `
    <h3>Edit your profile</h3>
    <div>
      <div>
        <label for="username">Username</label>
        <div class="input-area">
        <input id="username" type="text" placeholder="${user.username}">
        </div>
      </div>

      <div>
        <label for="email">Name</label>
        <div class="input-area">
          <input id="name" type="name" placeholder="${user.name}">
        </div>
      </div>

      <div>
        <label for="new-password">New Password</label>
        <div class="input-area">
          <input id="new-password" type="password">
        </div>
      </div>

      <div>
        <label for="confirm-new-password">Confirm New Password</label>
        <div class="input-area">
          <input id="confirm-new-password" type="password">
        </div>
      </div>

      <div>
        <label for="biography">Biography</label>
        <div class="input-area">
          <input id="biography" type="text" placeholder="${user.bio}">
        </div>
      </div>

      <div>
        <span>Picture</span>
        <div class="file">
          <label class="input-file" for="picture">Send File</label>
          <input id="picture" type="file">
        </div>
      </div>
    </div>

    <div class="buttons">
      <button type="submit" class="confirm-changes">Confirm Changes</button>
      <button type="submit" class="cancel-changes">Cancel</button>
    </div>
    `
}
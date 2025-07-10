export default function editProfile(user) {
  return `
    <h3>Edit your profile</h3>
    <div>
      <div>
        <label for="username">Username</label>
        <div class="input-area input-username">
        <input id="username" type="text">
        </div>
      </div>

      <div>
        <label for="name">Name<span class="name-char-count">0/50</span></label>
        <div class="input-area input-name">
          <input id="name" type="name" maxlength="50">
        </div>
      </div>

      <div>
        <label for="new-password">New Password</label>
        <div class="input-area input-new-password">
          <input id="new-password" type="password">
        </div>
      </div>

      <div>
        <label for="confirm-new-password">Confirm New Password</label>
        <div class="input-area input-confirm-new-password">
          <input id="confirm-new-password" type="password">
        </div>
      </div>

      <div>
        <label for="biography">Biography<span class="bio-char-count">0/250</span></label>
        <div class="input-area input-bio">
          <input id="biography" type="text" placeholder="${user.bio}" maxlength="250">
        </div>
      </div>

      <div>
        <span class="file-span">Picture</span>
        <div class="file">
          <label class="input-file" for="picture">Send File</label>
          <input id="picture" type="file">
        </div>
      </div>
    </div>

    <div class="buttons">
      <button type="submit" class="confirm-changes">Confirm Changes</button>
    </div>
    `
}
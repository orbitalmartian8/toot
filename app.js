document.addEventListener("DOMContentLoaded", function () {
    const loginButton = document.getElementById("login-button");
    loginButton.addEventListener("click", handleLogin);
});

function handleLogin() {
    const instanceUrl = document.getElementById("instance").value.trim();
    if (!instanceUrl.startsWith("http")) {
        alert("Please enter a valid instance URL starting with 'http' or 'https'.");
        return;
    }

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    const redirectUri = window.location.origin + "/callback"; // Change this to your callback URL

    const oauthUrl = `${instanceUrl}/oauth/token?redirect_uri=${redirectUri}&response_type=code&client_id=${username}&client_secret=${password}&scope=read`;

    // Redirect to the Mastodon OAuth token URL
    window.location.href = oauthUrl;
}

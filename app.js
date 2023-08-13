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

    const redirectUri = window.location.origin + "/callback"; // Change this to your callback URL

    const oauthUrl = `${instanceUrl}/oauth/authorize?redirect_uri=${redirectUri}&response_type=code&scope=read`;

    // Redirect to the Mastodon OAuth authorization URL
    window.location.href = oauthUrl;
}

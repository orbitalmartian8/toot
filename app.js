// app.js
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

    // Construct the URL for instance-specific authorization
    const authorizationUrl = `${instanceUrl}/oauth/authorize?client_id=your_client_id&redirect_uri=${encodeURIComponent(window.location.origin + "/callback")}&response_type=code&scope=read`;

    // Redirect to the instance-specific authorization URL
    window.location.href = authorizationUrl;
}

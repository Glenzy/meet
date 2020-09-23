import React from "react";

function Login() {
  return (
    <div className="App">
      <h1>Welcome to the Meet app</h1>
      <h4>
        Login in to see upcoming events around the world for full stack
        developers
      </h4>

      <div className="button_cont" align="center">
        <a
          className="login-button"
          href="https://accounts.google.com/o/oauth2/v2/auth?access_type=offline&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fcalendar.readonly&response_type=code&client_id=958736454897-lngqcuu7i8v9q114uejke6fek1g4bd2f.apps.googleusercontent.com&redirect_uri=https%3A%2F%2Fglenzy.github.io%2Fmeet%2F"
          rel="nofollow noopener"
        >
          Login
        </a>
      </div>
      <a href="https://glenzy.github.io/meet/privacy.html" rel="nofollow noopener">Privacy policy</a>
    </div>
  );
}

export default Login;

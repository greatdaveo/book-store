import React from "react";
import "../styles/pages/LoginPage.css";

const LoginPage = () => {
  return (
    <main className="login-container">
      <section>
        <p className="">Login</p>
      </section>

      <form>
        <div>
          <label htmlFor="email">Your email:</label>
          <input
            type="email"
            id="email"
            placeholder="dave@example.com"
            required
            autoComplete="off"
          />
        </div>
        <div>
          <label htmlFor="password">Your password:</label>
          <input type="password" id="password" placeholder="*******" required />
        </div>

        <div>
          <button type="submit">Log In</button>
          <button>Login As Guest</button>
        </div>
      </form>
    </main>
  );
};

export default LoginPage;

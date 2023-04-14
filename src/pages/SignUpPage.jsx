import React from "react";
import "../styles/pages/SignUpPage.css";

const SignUp = () => {
  return (
    <main className="logout-container">
      <section>
        <p>Register</p>
      </section>

      <form>
        <div>
          <label htmlFor="name">Your name:</label>
          <input
            type="name"
            id="name"
            placeholder="David Olowomeye"
            required
            autoComplete="off"
          />
        </div>
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
          <input
            type="password"
            id="password"
            placeholder="*******"
            required
            minLength="7"
          />
        </div>

        <div>
          <button type="submit">Register</button>
        </div>
      </form>
    </main>
  );
};

export default SignUp;

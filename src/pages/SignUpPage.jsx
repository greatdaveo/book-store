import React from "react";
import "../styles/pages/SignUpPage.css";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

// THIS IS FOR THE register function from authService
import { register } from "../services/authService";

const SignUp = () => {
  // For useNavigate in the React Toastify
  const navigate = useNavigate();

  // TO HANDLE SIGNUP SUBMIT
  async function handleSignUp(e) {
    e.preventDefault();
    const authDetails = {
      name: e.target.name.value,
      email: e.target.email.value,
      password: e.target.password.value,
    };

    const data = await register(authDetails);
    // THIS IS FOR THE REACT TOASTIFY
    data.accessToken ? navigate("/products") : toast.error(data);
  }
  // ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

  return (
    <main className="logout-container">
      <section>
        <p>Register</p>
      </section>

      <form onSubmit={handleSignUp}>
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

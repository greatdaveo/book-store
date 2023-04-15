import React from "react";
import "../styles/pages/SignUpPage.css";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

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

    // This is for the JSON request options
    const requestOptions = {
      method: "POST",
      headers: { "content-Type": "application/json" },
      body: JSON.stringify(authDetails),
    };

    const response = await fetch(
      "http://localhost:8000/register",
      requestOptions
    );
    const data = await response.json();
    // THIS IS FOR THE REACT TOASTIFY
    data.accessToken ? navigate("/products") : toast.error(data);
    console.log(data);
  }

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

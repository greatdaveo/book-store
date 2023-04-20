import React from "react";
import { useRef } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "../styles/pages/LoginPage.css";

// LOGIN FUNCTION FROM authService
import { login } from "../services/authService";

const LoginPage = () => {
  const navigate = useNavigate();

  // TO HANDLE LOGIN SUBMIT
  const emailRef = useRef();
  const passwordRef = useRef();

  async function handleLogin(e) {
    e.preventDefault();
    const authDetails = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };

    const data = await login(authDetails);
    data.accessToken ? navigate("/products") : toast.error(data);
  }
  // ::::::::::::::::::::::::::::::::::::::::::::::::

  return (
    <main className="login-container">
      <section>
        <p className="">Login</p>
      </section>

      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="email">Your email:</label>
          <input
            type="email"
            id="email"
            ref={emailRef}
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
            ref={passwordRef}
            placeholder="*******"
            required
          />
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

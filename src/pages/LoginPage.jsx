import React from "react";
import { useRef } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "../styles/pages/LoginPage.css";

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

    // This is for the JSON request options
    const requestOptions = {
      method: "POST",
      headers: { "content-Type": "application/json" },
      body: JSON.stringify(authDetails),
    };

    const response = await fetch("http://localhost:8000/login", requestOptions);
    const data = await response.json();
    // console.log(data);
    data.accessToken ? navigate("/products") : toast.error(data);

    if (data.accessToken) {
      sessionStorage.setItem("token", JSON.stringify(data.accessToken));
      sessionStorage.setItem("userID", JSON.stringify(data.user.id));
    }
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

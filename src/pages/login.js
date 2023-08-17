import React, { useState } from "react";
import "../Styles/styles.css"; // Make sure to adjust the path to your CSS file
import LogoSvg from "../website_images/Logo.svg";
import {auth} from "../firebase"
import { signInWithEmailAndPassword } from "firebase/auth";
import {useNavigate} from "react-router-dom"


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()

  const SignIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user
        navigate("/home")
        console.log(user);
      })
      .catch((error) => {
        const errCode = error.code;
        const errorMessage = error.message;
        console.log(errCode, errorMessage)
      });
  };

  return (
    <section className="main-section">
      <div className="container background-login">
        <header className="header text-center">
          <img src={LogoSvg} alt="Logo" />
        </header>

        <div className="form-section">
          <div className="top-info text-center">
            <h6 className="tagline">Sign in</h6>
            <h1 className="heading-one">Welcome back!</h1>
            <p className="body-one">Sign in to access your account</p>
          </div>

          <hr />

          <form className="form" onSubmit={SignIn}>
            <div className="form-control">
              <label
                className="form-label"
                type="email"
              >
                Email Address
              </label>
              <input className="form-input" type="email" id="email" value={email}
                onChange={(e) => setEmail(e.target.value)} />
            </div>

            <div className="form-control">
              <label
                className="form-label"
              >
                Password
              </label>
              <input className="form-input" type="password" id="password" value={password}
                onChange={(e) => setPassword(e.target.value)}/>
            </div>

            <button className="btn btn-primary">Sign in</button>

            <p className="body-two text-center">
              <a href="#">Forgot your password?</a>
            </p>
          </form>
        </div>

        <div className="account-select">
          <p className="body-two text-light text-center">
            {" "}
            Don't have an account yet?
            <a href="./signup">Create one</a>
          </p>
        </div>

        <div className="text-center">
          <img
            className="illustration-sign-in"
            src={require("../website_images/sign-in.png")}
            alt="Sign Up"
          />
        </div>
      </div>
    </section>
  );
}

export default Login;

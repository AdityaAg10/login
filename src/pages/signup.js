import React, { useState } from "react";
import "../Styles/styles.css"; // Make sure to adjust the path to your CSS file
import LogoSvg from "../website_images/Logo.svg";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

function SignUp() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signUp = async (e) => {
    e.preventDefault();

    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        navigate("/login");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        // ..
      });
  };
  return (
    <section className="main-section">
      <div className="container background-sign-up">
        <header className="header text-center">
          <img src={LogoSvg} alt="Logo" />
        </header>

        <div className="form-section">
          <div className="top-info text-center">
            <h6 className="tagline">Sign up</h6>
            <h1 className="heading-one">Create an Account.</h1>
            <p className="body-one">Welcome to Oniqs, where magic happens.</p>
          </div>

          <hr />

          <form className="form">
            <div className="form-inline">
              <div className="form-control">
                <label className="form-label" htmlFor="first-name">
                  First Name
                </label>
                <input className="form-input" type="text" id="first-name" />
              </div>

              <div className="form-control">
                <label className="form-label" htmlFor="last-name">
                  Last Name
                </label>
                <input className="form-input" type="text" id="last-name" />
              </div>
            </div>

            <div className="form-control">
              <label className="form-label" htmlFor="email" value={email} >Email</label>
              <input
                className="form-input"
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="form-control">
              <label className="form-label" htmlFor="password">
                Password
              </label>
              <input
                className="form-input"
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button className="btn btn-primary" onClick={signUp}>Create Account</button>

            <p className="body-two text-center">
              I have read and agreed to the <a href="#">Terms of Service.</a>
            </p>
          </form>
        </div>

        <div className="account-select">
          <p className="body-two text-light text-center">
            Already have an account? <a href="./login">Sign in</a>
          </p>
        </div>

        <div className="text-center">
          <img
            className="illustration-sign-up"
            src={require("../website_images/sign-up.png")}
            alt="Sign Up"
          />
        </div>
      </div>
    </section>
  );
}

export default SignUp;

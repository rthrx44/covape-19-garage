import React from "react";
import "./Login.css";
import Cvlogo from "../../components/assets/Cvlogo.png";
import { LButton, NButton } from "../../components/buttons/Button";
import { Link } from "react-router-dom";

function Login() {
  return (
    <>
      <main className="Login container">
        <section className="Login__wrapper1">
          <div className="Login__wrapper2">
            <img
              className="Login__logo"
              src={Cvlogo}
              alt="Covape-19 Garage Logo"
            />
            <h1 className="Login__title">
              Login to <br></br>Covape-19 Garage
            </h1>
            <form className="Login__form">
              <input
                className="Login__form-textarea"
                type="email"
                name="email"
                placeholder="E-mail"
              />
              <input
                className="Login__form-textarea"
                type="password"
                name="password"
                placeholder="Password"
              />
              <LButton displayText="Login" />
            </form>
            <p className="Login__description">
              New to Covape-19 Garage?
            </p>
            <Link to='/register'><NButton displayText="Create an Account" /></Link>
          </div>
        </section>
      </main>
    </>
  );
}

export default Login;

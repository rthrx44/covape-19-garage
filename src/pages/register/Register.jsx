import React from "react";
import "./Register.css";
import Cvlogo from "../../components/assets/Cvlogo.png";
import { LButton, NButton } from "../../components/buttons/Button";
import { Link } from "react-router-dom";

function Register() {
  return (
    <>
      <main className="register container">
        <section className="register__wrapper1">
          <div className="register__wrapper2">
            <img
              className="register__logo"
              src={Cvlogo}
              alt="Covape-19 Garage Logo"
            />
            <h1 className="register__title">
              Sign up to <br></br>Covape-19 Garage
            </h1>
            <form className="register__form">
              <input
                className="register__form-textarea"
                type="text"
                name="name"
                placeholder="Username"
              />
              <input
                className="register__form-textarea"
                type="email"
                name="email"
                placeholder="E-mail"
              />
              <input
                className="register__form-textarea"
                type="password"
                name="password"
                placeholder="Password"
              />
              <LButton displayText="Continue" />
            </form>
            <p className="register__description">
              Already using Covape-19 Garage?
            </p>
            <Link to='/login'><NButton displayText="Back to Login" /></Link>
          </div>
        </section>
      </main>
    </>
  );
}

export default Register;

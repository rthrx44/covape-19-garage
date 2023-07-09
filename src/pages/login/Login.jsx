import React, { useState, useEffect } from "react";
import "./Login.css";
import Cvlogo from "../../components/assets/Cvlogo.png";
import { LButton, NButton } from "../../components/buttons/Button";
import { useNavigate, Link } from "react-router-dom";
import Loading from "../../components/loading/Loading";

function Login() {

  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });
  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowLoading(false);
    }, 3000);
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const getUser = JSON.parse(localStorage.getItem('registeredUsers'));
    const filteredUser = getUser.filter(obj => (obj.email === formValues.email))
    if (!formValues.email || !formValues.password) {
        alert('Please fill up required fields!');
    } else if (filteredUser.length === 0) {
        alert('Invalid details!');
    } else {
        localStorage.setItem("loggedUser", JSON.stringify(filteredUser));
        setTimeout(3000, navigate('/dashboard'));
    }
    
  };

  return (
    <>
      {showLoading && <Loading />}
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
            <form 
              className="Login__form"
              onSubmit={handleLogin}
            >
              <input
                className="Login__form-textarea"
                type="email"
                name="email"
                placeholder="E-mail"
                value={formValues.email}
                onChange={handleChange}
              />
              <input
                className="Login__form-textarea"
                type="password"
                name="password"
                placeholder="Password"
                value={formValues.password}
                onChange={handleChange}
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

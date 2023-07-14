import React, { useState } from "react";
import "./Register.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { LButton, NButton } from "../../components/buttons/Button";
import { useNavigate, Link } from "react-router-dom";
import Cvlogo from '../../components/assets/Image/Cvlogo.png'

function Register() {
  
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    let user = JSON.parse(localStorage.getItem('registeredUsers')) || [];
    const findUser = user.find(obj => (obj.email === formValues.email || obj.username === formValues.username));
    if (!formValues.username || !formValues.email || !formValues.password) {
      toast.error('Please fill up required fields!', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        theme: "light",
        className: "errors",
        });
    } else if (findUser !== undefined) {
        toast.error('"User" or "Email" is already exist', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: false,
          progress: undefined,
          theme: "light",
          className: "errors",
          });
    } else {
        user.push(formValues);
        localStorage.setItem("registeredUsers", JSON.stringify(user));
        navigate('/login');

    }
  }

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
            <form 
              className="register__form"
              onSubmit={handleRegister}
            >
              <input
                className="register__form-textarea"
                type="text"
                name="username"
                placeholder="Username"
                value={formValues.username}
                onChange={handleChange}
              />
              <input
                className="register__form-textarea"
                type="email"
                name="email"
                placeholder="E-mail"
                value={formValues.email}
                onChange={handleChange}
              />
              <input
                className="register__form-textarea"
                type="password"
                name="password"
                placeholder="Password"
                value={formValues.password}
                onChange={handleChange}
              />
              <LButton displayText="Continue" />
              <ToastContainer limit={2}/>
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

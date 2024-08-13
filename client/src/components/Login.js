import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
const Login = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    });
    const json = await response.json();
    if (json.success) {
      // Save the auth token and redirect
      Cookies.set("token", json.authtoken, {
        expires: 7,
        secure: true,
        httpOnly: true,
        sameSite: "lax",
      });
      console.log(json);
      navigate("/");
    } else {
      alert(json.error);
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  return (
    <>
      <div className="container">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="my-3">
            <label htmlFor="exampleInputEmail" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail"
              name="email"
              aria-describedby="emailHelp"
              placeholder="example@ex.com"
              required
              value={credentials.email}
              onChange={onChange}
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              name="password"
              placeholder="*********"
              required
              value={credentials.password}
              onChange={onChange}
            />
          </div>

          <button type="submit" className="btn btn-info">
            <i className="fa-solid fa-arrow-right-to-bracket py-2">
              &ensp;Login
            </i>
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;

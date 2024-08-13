import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const Signup = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    email: "",
    name: "",
    password: "",
    confirm: "",
  });
  const { name, email, password } = credentials;
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/auth/createuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        name,
        password,
      }),
    });
    const json = await response.json();

    // Save the auth token and redirect
    Cookies.set("token", json.authtoken, {
      expires: 7,
      httpOnly: true,
      sameSite: "lax",
    });

    console.log(json);
    navigate("/");
  };
  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  return (
    <>
      <div className="container">
        <h1>Signup</h1>
        <form onSubmit={handleSubmit}>
          <div className="my-3">
            <label for="exampleInputEmail3" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail3"
              name="email"
              required
              aria-describedby="emailHelp"
              placeholder="example@ex.com"
              onChange={onChange}
            />
            <div id="emailHelp" className="form-text">
              Emil Should be Unique
            </div>
          </div>
          <div className="my-3">
            <label for="username" className="form-label">
              User Name
            </label>
            <input
              type="text"
              className="form-control"
              id="username"
              name="username"
              required
              placeholder="David .."
              onChange={onChange}
            />
          </div>
          <div className="mt-3">
            <label for="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              name="password"
              required
              minLength={8}
              placeholder="*********"
              onChange={onChange}
            />
          </div>
          <div className="my-3">
            <label for="exampleInputPassword" className="form-label">
              Confirm Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword"
              name="confirm"
              required
              minLength={8}
              placeholder="*********"
              onChange={onChange}
            />
          </div>
          <div id="emailHelp" className="form-text">
            <span className="py-2 pe-3 alert alert-info rounded">
              <strong>
                Password Should be at least 8 characters include (Capital
                letters, numbers, special characters)
              </strong>
            </span>
          </div>
          <button type="submit" className="btn btn-info mt-3">
            <i className="fa-solid fa-arrow-right-to-bracket py-2">
              &ensp;Signup
            </i>
          </button>
        </form>
      </div>
    </>
  );
};

export default Signup;

import React from "react";

const Signup = () => {
  return (
    <>
      <div className="container">
        <h1>Signup</h1>
        <form>
          <div className="my-3">
            <label for="exampleInputEmai" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail"
              name="email"
              aria-describedby="emailHelp"
              placeholder="example@ex.com"
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
              placeholder="David .."
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
              placeholder="*********"
            />
          </div>
          <div id="emailHelp" className="form-text">
            Password Should be atleast 8 characters include (Capital letters, numbers, special characters)
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

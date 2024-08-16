import React, { useEffect, useRef, useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import noteContext from "../context/notes/noteContext";

const Navbar = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const host = "http://localhost:5000";
  const getUser = async () => {
    const response = await fetch(`${host}/api/auth/getuser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
      body: JSON.stringify({}),
    });
    const user = await response.json();
    setUserName(user.name);
  };

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const context = useContext(noteContext);
  const { notes } = context;
  let location = useLocation();
  useEffect(() => {}, [location]);
  const handleClick = () => {
    ref.current.click();
    getUser();
  };
  const ref = useRef(null);
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-info py-4">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            My Notebook
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname === "/home" ? "active" : ""
                  }`}
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname === "/about" ? "active" : ""
                  }`}
                  aria-current="page"
                  to="/about"
                >
                  About
                </Link>
              </li>
            </ul>
            {localStorage.getItem("token") ? (
              <div className="d-flex me-3 g-6" role="search">
                <i
                  onClick={handleClick}
                  className="fa-solid fa-user h-50"
                  style={{ color: "white", cursor: "pointer" }}
                >
                  &ensp;Account
                </i>
              </div>
            ) : (
              <>
                <button type="button" className="border-0 bg-transparent">
                  <Link
                    to="/signup"
                    className="fa-solid fa-user-plus text-light mx-3"
                    style={{ cursor: "pointer", textDecoration: "none" }}
                  >
                    &ensp;Signup
                  </Link>
                </button>
                <button type="button" className="border-0 bg-transparent">
                  <Link
                    to="/login"
                    className="fa-solid fa-right-to-bracket text-light"
                    style={{ cursor: "pointer", textDecoration: "none" }}
                  >
                    &ensp;Login
                  </Link>
                </button>
              </>
            )}
          </div>
        </div>
      </nav>
      <button
        ref={ref}
        className="btn btn-primary d-none"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasRight"
        aria-controls="offcanvasRight"
      >
        Toggle right offcanvas
      </button>
      <div
        className="offcanvas offcanvas-end"
        tabIndex="-1"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        <div className="offcanvas-header bg-info text-white py-4">
          <h5 className="offcanvas-title" id="offcanvasRightLabel">
            Account
          </h5>
          <button
            type="button"
            className="btn-close text-white"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        {location.pathname === "/" ? (
          <div className="offcanvas-body">
            <h2>Hello {userName}</h2>
            <h4>{notes.length} Notes</h4>
          </div>
        ) : (
          <button type="button" className="border-0 bg-transparent">
            <Link
              to="/login"
              className="fa-solid fa-right-to-bracket text-light"
              style={{ cursor: "pointer", textDecoration: "none" }}
            >
              &ensp;Login
            </Link>
          </button>
        )}
        <hr className=" border-info border-2" />
        <div className="footer container pb-3">
          <button
            onClick={logout}
            type="button"
            className="border-0 bg-transparent"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          >
            <Link
              to="/login"
              className="fa-solid fa-right-from-bracket"
              style={{
                cursor: "pointer",
                color: "red",
                textDecoration: "none",
              }}
            >
              &ensp; Logout
            </Link>
          </button>
          <button
            type="button"
            className="border-0 bg-transparent"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          >
            <Link
              to="/signup"
              className="fa-solid fa-user-plus text-info mx-3"
              style={{ cursor: "pointer", textDecoration: "none" }}
            >
              &ensp; Signup
            </Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;

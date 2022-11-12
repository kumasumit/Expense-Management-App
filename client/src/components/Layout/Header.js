import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { message } from "antd";

const Header = () => {
  const navigate = useNavigate();
  const [loginUser, setLoginUser] = useState("");
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setLoginUser(user);
    }
    //this will execute only when header mounts
  }, []);
  // logout handler
  const logoutHandler = () => {
    //first we clear user data from local storage
    localStorage.removeItem("user");
    // localStorage.clear();
    message.success("Logout Successful");
    //then we redirect to login page
    navigate("/login");
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <Link to="/" className="navbar-brand">
              Expense Management System
            </Link>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <p className="nav-link">{loginUser && loginUser.name}</p>
                {/* this will show logged in user details */}
              </li>
              <button className="btn btn-primary" onClick={logoutHandler}>
                Logout
              </button>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;

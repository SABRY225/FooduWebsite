import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../Context/Context"
import Dropdown from 'react-bootstrap/Dropdown';
const Header = () => {
  // let user=localStorage.getItem("auth")
  const [auth, setAuth] = useAuth();

  const handelLogOut = () => {
    setAuth({
      user: null, token: ""
    })
    localStorage.removeItem("auth")
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
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
              🛒 Beka
            </Link>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link ">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/category" className="nav-link ">
                  Category
                </Link>
              </li>
              {
                !auth.user ? (<> <li className="nav-item">
                  <Link to="/register" className="nav-link">
                    Register
                  </Link>
                </li>
                  <li className="nav-item">
                    <Link to="/login" className="nav-link">
                      Login
                    </Link>
                  </li></>) : (
                  <Dropdown>
                    <Dropdown.Toggle variant="success" >
                    {auth.user.name}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      {
                        auth.user.email === "Ahmedsabrymahmoud225@gmial.com" ? (<Dropdown.Item  ><Link to="/deshboard/admin" className="nav-link">Deshbord</Link></Dropdown.Item>):(<Dropdown.Item ><Link to="/deshboard/user" className="nav-link">Deshbord</Link></Dropdown.Item>)
                      
                      }
                      <Dropdown.Item ><Link onClick={handelLogOut} to="/login" className="nav-link">LogOut</Link></Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                )
              }
              <li className="nav-item">
                <Link to="/cart" className="nav-link">
                  Cart (0)
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
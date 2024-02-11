import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footer " style={{marginTop:300}}>
      <div className="container">
      <div className="text-center row">
        <span className="col box">B</span>
        <span className="col box">E</span>
        <span className="col box">K</span>
        <span className="col box">A</span>
      </div>
        <div className="row">
        <p className="text-start mt-5 col">
        <div className="m-3"><Link to="/about"><i className="fas fa-info-circle" >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; About</i></Link></div>
        <div className="m-3"><Link to="/contact"><i className="fas fa-headset" >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Contact</i></Link></div>
        <div className="m-3"><Link to="/policy"><i className="	fas fa-unlock" >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Privacy Policy</i></Link></div>
      </p>
      <p className="text-center mt-5 col">
        <div className="m-3"><Link to="/"><i className="fas fa-house-damage" >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Home</i> </Link></div>
        <div className="m-3"><Link to="/category"><i className="far fa-list-alt" >&nbsp; Category</i></Link></div>
        <div className="m-3"><Link to="/cart"><i className="fas fa-shopping-cart" >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Cart</i></Link></div>
      </p>
      <p className="text-end mt-5 col">
        <div className="m-3"><Link to="/about"><i className="fab fa-facebook">&nbsp;&nbsp; Facebook</i></Link></div>
        <div className="m-3"><Link to="/contact"><i className="fab fa-linkedin">&nbsp;&nbsp;&nbsp;&nbsp;LinkedIn</i></Link></div>
        <div className="m-3"><Link to="/policy"><i className="fab fa-github">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Github</i></Link></div>
      </p>
      <h2 className="text-center h4">All Right Reserved &copy; Ahmed Sabry</h2>
        </div>
      </div>
      
    </div>
  );
};

export default Footer;
import React from "react";
import "./Home.css";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";


const Home = () => {
     const navigate = useNavigate();
  return (
    <div className="home-container">
      {/* NAVBAR */}
      <nav className="navbar">
        <div className="logo">ZeeCare</div>

        <ul className="menu">
          <li>Home</li>
          {/* <li>Appointment</li> */}
          <li>About Us</li>
        </ul>

        <Button className="login-btn"  onClick={() => navigate("/login")}>LOGIN</Button>

      </nav>

      {/* HERO SECTION */}
      <div className="hero">
        <div className="hero-left">
          <h1>
            Welcome to ZeeCare Medical Institute | Your Trusted Healthcare
            Provider
          </h1>

          <p>
            ZeeCare Medical Institute is a state-of-the-art facility dedicated
            to providing comprehensive healthcare services with compassion and
            expertise.
          </p>
        </div>

        <div className="hero-right">
          <img
            src="https://img.freepik.com/premium-photo/medic-man-illustration_853677-59466.jpg"   // put image in public folder
            alt="Doctor"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;

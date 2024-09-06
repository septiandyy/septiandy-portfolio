// import { AiFillFileText } from "react-icons/ai";

import { Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import realProfile from "../assets/img/test1.png";
import hoverProfile from "../assets/img/test2.png";
// import CVDoc from "../assets/download/CV.pdf";
import Hi from "../assets/img/jammies.gif";
import zoomFarGif from '../assets/img/zoom-far.gif';
import { Helmet, HelmetProvider } from "react-helmet-async";

import "./CSS/Home.css";

function Home() {
  function setAvatarReal() {
    setImage(hoverProfile);
  }

  function setAvatarAnimation() {
    setImage(realProfile);
  }
  const [image, setImage] = useState(realProfile);

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Alif Septiandi- Home</title>
        </Helmet>
      </HelmetProvider>
      <Container fluid className="home-wrapper">
        <div className="home-left animate__animated animate__fadeInLeft">
          <h3>
          <b>Ciao!</b><img width="50" src={Hi} alt="Hi" />
          </h3>
          <h2>
            <span className="name-hover">Welcome</span>
            <br />
            <span className="name-hover">to my portfolio!</span>
          </h2>
          <h4>
          <img width="35" src={zoomFarGif} alt="Hallo" /> My name is Alif Septiandi <img width="35" src={zoomFarGif} alt="Hallo" />
          </h4>
          <NavLink to="/contact" className="btn-download text-center">
            Let's Connect
          </NavLink>
          {/* <AiFillFileText /> */}
          {/* &nbsp;&nbsp;Hire Me */}
        </div>
        <div className="home-right animate__animated animate__fadeIn animate__slower">
          <img
            className="home-image"
            src={image}
            onMouseOver={setAvatarReal}
            onMouseOut={setAvatarAnimation}
            alt="Avatar"
          />
        </div>
      </Container>
    </>
  );
}

export default Home;

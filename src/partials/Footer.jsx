import { AiFillGithub, AiFillLinkedin, AiFillInstagram, AiFillTwitterCircle, AiFillCodeSandboxCircle } from "react-icons/ai";
import "./CSS/Footer.css";

function Footer() {
  return (
    <>
      <footer className="px-4">
        <div className="foot-left d-flex">
          <p>Alif Septiandi &copy; 2024</p>
        </div>
        <div className="foot-right d-flex">
          <a
            href="https://github.com/septiandyy"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillGithub className="foot-icon" />
            &nbsp;&nbsp;GitHub
          </a>
          <a
            href="https:https://www.linkedin.com/in/alif-septiandi-811062231/"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillLinkedin className="foot-icon" />
            &nbsp;&nbsp;Linkedin
          </a>
          <a
            href="https://www.instagram.com/alifseptiandii"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillInstagram className="foot-icon" />
            &nbsp;&nbsp;Instagram
          </a>
          <a
            href="https://www.x.com/unorthodoxnun"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillTwitterCircle className="foot-icon" />
            &nbsp;&nbsp;Twitter
          </a>
          <a
            href="https://www.leetcode.com/septiandy"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillCodeSandboxCircle className="foot-icon" />
            &nbsp;&nbsp;Leetcode
          </a>
          
        </div>
      </footer>
    </>
  );
}

export default Footer;

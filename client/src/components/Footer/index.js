import React from "react";
import "./style.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row align-items-start">
          {/* Mission Statement column */}
          <div className="col-md-3">
            <h5 className="footer-heading">Our Mission</h5>
            <p className="mission-statement">"All is well!" Grab-n-go is inspired by the philiposophy to help the community explore real food places nearby, have a look at there menu and just order it online</p>
          </div>
          {/* ContactUs column */}
          <div className="col-md-3">
            <h5 className="footer-heading">Contact Us</h5>
            <address className="footer-info">
              1111 washington street<br></br>
                Suite 700<br></br>
                Seattle,WA 00009<br></br>
              <br></br>
                P: 000-000-000<br></br>
              <p className="footer-info"> <i className="fab fa-facebook"></i> <i className="fab fa-linkedin-in"></i> <i className="fab fa-pinterest-square"></i></p>
            </address>
          </div>
          {/* Founders column */}
          <div className="col-md-3">
            <h5 className="footer-heading">Founders</h5>
            <ul className="footer-info">
              <li>Anusha</li>
              <li>Jessica</li>
              <li>Sam</li>
              <li>Sai</li>
            </ul>
          </div>
          {/* Mission statement column */}
          <div className="col-md-3">
            <h5 className="footer-heading">Code of ethics</h5>
            <p className="mission-statement">"......."</p>
          </div>
        </div>
      </div>

    </footer>
  );
}

export default Footer;
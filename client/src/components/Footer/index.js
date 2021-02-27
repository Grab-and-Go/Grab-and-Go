import React from "react";
import "./style.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row align-items-start">
          {/* Mission Statement column */}
          <div className="col-md-4">
            <h5 className="footer-heading" style={{textAlign:"center"}}>Our Mission</h5>
            <p className="mission-statement">"To provide the community with a friendly App to quickly order food"</p>
          </div>
          {/* ContactUs column */}
          <div className="col-md-4">
            <h5 className="footer-heading" style={{textAlign:"center"}}>Contact Us</h5>
            <address className="footer-info" style={{textAlign:"center"}}>
              {/* 1111 washington street<br></br>
                Suite 700<br></br>
                Seattle,WA 00009<br></br> */}
              
              Grab and Goers<br></br>
              <p className="footer-info"><a href="https://github.com/Grab-and-Go/Grab-and-Go" style={{ color: '#d9ead3' }}><i className="fab fa-github fa-2x"></i></a> </p>
            </address>
          </div>
          {/* Founders column */}
          <div className="col-md-4">
            <h5 className="footer-heading" style={{textAlign:"center"}}>Founders</h5>
            <div className="row" style={{textAlign:"center"}}>
               <div className="col-md-6">
            <p className="footer-info"><a href="https://anurav18.github.io/reactportfolio/" className="portfolio">Anusha R</a></p>
            <p className="footer-info"><a href="" className="portfolio">Sai Purciful</a></p>
            </div>
            <div className="col-md-6">
            <p className="footer-info"><a href="https://jesshuang7.github.io/Portfolio_React/" className="portfolio">Jessica Tzunu Huang </a></p>
            <p className="footer-info"><a href="" className="portfolio">Sam Rodriguez </a></p>
            </div>
            </div>
           
            
          </div>
        </div>
      </div>

    </footer>
  );
}

export default Footer;
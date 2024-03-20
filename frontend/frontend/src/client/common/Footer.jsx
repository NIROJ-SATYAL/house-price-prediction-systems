import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
      <footer className="footer-distributed">
        <div className="left">
          <img src="assets/images/logo.png" alt="logo" />
          <h3>
            About <span>Home Wise</span>
          </h3>
        </div>

        <div className="center">
          <div>
            <i className="fa fa-map-marker"></i>
            <p> Kathmandu, Nepal</p>
          </div>

          <div>
            <i className="fa fa-phone"></i>
            <p>0245367424</p>
          </div>
          <div>
            <i className="fa fa-envelope"></i>
            <p>
              <a href="mailto:info@oxford.com">info@homewise.com</a>
            </p>
          </div>
        </div>
        <div className="right">
          <p className="companyabout">
            <span>
              <strong>About Homewise</strong>
            </span>{" "}
            Discover your home's worth with HomeWise - the smart solution for
            home value predictions. Get accurate and up-to-date estimates with
            ease
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;

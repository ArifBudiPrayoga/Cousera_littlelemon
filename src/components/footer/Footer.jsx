import "./Footer.css";
import Logo from "../../assets/footerlogo.png";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-container global-max-width">
          <div className="footer-des">
            <img src={Logo} alt="Little Lemon logo" />
            <div className="opening-times">
              <h5>OPENING TIMES</h5>
              <ul>
                <li>Mon - Wed: 10:30AM - 12:00AM</li>
                <li>Fri: 12:00PM - 1:00AM</li>
                <li>Sat - Sun: 10:30AM - 12:00AM</li>
              </ul>
            </div>

            <div className="contact">
              <h5>CONTACT US</h5>
              <ul>
                <li>Tel: 628XXXXXXXXX</li>
                <li>Email: Course@littlelemon.com</li>
              </ul>
            </div>

            <div className="locations">
              <h5>LOCATIONS</h5>
              <ul>
                <li>Indonesia, Jakarta</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="copyright">
          <p>© 2023 Little Lemon Ltd. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;

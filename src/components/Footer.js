import Wrapper from "./Wrapper";

import logo from "../images/logo.svg";
import facebook_logo from "../images/icon-facebook.svg";
import twitter_logo from "../images/icon-twitter.svg";
import pinterest_logo from "../images/icon-pinterest.svg";
import instagram_logo from "../images/icon-instagram.svg";

import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer>
      <Wrapper className={styles.footer}>
        <div>
          <img src={logo} alt="" />
          <ul className={styles.navLinks}>
            <li>About</li>
            <li>Careers</li>
            <li>Events</li>
            <li>Products</li>
            <li>Support</li>
          </ul>
        </div>
        <div>
          <ul className={styles.socialLinks}>
            <li>
              <img src={facebook_logo} alt="" />
            </li>
            <li>
              <img src={twitter_logo} alt="" />
            </li>
            <li>
              <img src={pinterest_logo} alt="" />
            </li>
            <li>
              <img src={instagram_logo} alt="" />
            </li>
          </ul>
          <p>&copy; 2021 Loopstudios. All rights reserved.</p>
        </div>
      </Wrapper>
    </footer>
  );
};

export default Footer;

import { useState } from "react";

import Wrapper from "./Wrapper";

import Logo from "../images/logo.svg";
import HamburgerIcon from "../images/icon-hamburger.svg";
import CloseIcon from "../images/icon-close.svg";

import styles from "./Navbar.module.css";

const Navbar = () => {
  const [isMenu, setIsMenu] = useState(false);

  const menuOpenHandler = () => {
    setIsMenu(true);
  };
  const menuCloseHandler = () => {
    setIsMenu(false);
  };
  return (
      <nav
        className={
          isMenu ? `${styles.navbar} ${styles.mob_nav}` : `${styles.navbar}`
        }
      >
        <Wrapper className={styles.nav_items_wrapper}>
        <div className={styles.nav_items}>
          <img src={Logo} alt="Site Logo" />
          <img
            className={styles.hamIcon}
            src={isMenu ? `${CloseIcon}` : `${HamburgerIcon}`}
            alt="Ham Menu Logo"
            onClick={isMenu ? menuCloseHandler : menuOpenHandler}
          />
        </div>
        <ul className={isMenu ? `${styles.mob_menu}` : `${styles.nav_menu}`}>
          <li>About</li>
          <li>Careers</li>
          <li>Events</li>
          <li>Products</li>
          <li>Support</li>
        </ul>
        </Wrapper>
      </nav>
  );
};

export default Navbar;

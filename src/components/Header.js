import Wrapper from "./Wrapper";

import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <Wrapper>
        <div className={styles.box}>
          <h1 className={styles.heading}>Immersive experiences that deliver</h1>
        </div>
      </Wrapper>
    </header>
  );
};

export default Header;

import Wrapper from "./Wrapper";

import styles from "./Article.module.css";

import VrHeadsetM from "../images/mobile/image-interactive.jpg";
import VrHeadsetD from "../images/desktop/image-interactive.jpg";

const Article = () => {
  return (
    <article>
      <Wrapper className={styles.article}>
        <img
          srcset={`${VrHeadsetD} 731w, ${VrHeadsetM} 654w`}
          sizes="(min-width: 769px) 731px, 654px"
          src={VrHeadsetM}
          alt="Person wearing VR headset"
        />
        <div className={styles.text_container}>
          <h1>The leader in interactive VR</h1>
          <p>
            Founded in 2011, Loopstudios has been producing world-class virtual
            reality projects for some of the best companies around the globe.
            Our award-winning creations have transformed businesses through
            digital experiences that bind to their brand.
          </p>
        </div>
      </Wrapper>
    </article>
  );
};

export default Article;

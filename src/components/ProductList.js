import Wrapper from "./Wrapper.js";

import images from "./assets/gallery-images.js";

import styles from "./ProductList.module.css";

const ProductList = () => {
  return (
    <section className={styles.products}>
      <Wrapper>
        <h1>Our Creations</h1>
        <div className={styles.gallery}>
          {images.map((image) => (
            <picture>
              <source media="(min-width: 992px)" srcset={image.src[1]} />
              <img src={image.src[0]} alt=""/>
              <figcaption>{image.caption}</figcaption>
            </picture>
          ))}
        </div>
      </Wrapper>
    </section>
  );
};

export default ProductList;

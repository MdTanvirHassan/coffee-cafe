import React from 'react';
import img from "../../assets/images/hero.png";
import bg from "../../assets/images/group.png";
import styles from "./hero.module.scss";

const Hero = () => {
    return (
        <div>
      <section id="home" className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.grid}>
            <div className={`${styles.col} ${styles.bgWhite}`}>
              <div className={styles.absolute}>
                
                  <img
                    src={bg}
                    alt=""
                    width={145}
                    height={141}
                    className={`${styles.objectCover} ${styles.objectCenter}`}
                  />
               
              </div>
              <div className={styles.relative}>
                <h1 className={styles.title}>
                  Freshly Brewed
                  <br className={styles.hidden} />
                  Coffee
                </h1>
                <p className={styles.subtitle}>
                  Everyday in Arabika is like the colourful seasons of
                  Bangladesh. Arabika welcomes all its customers to come and
                  create special memories.
                </p>

                <button className={styles.button}>
                  Order Now
                </button>
              </div>
            </div>
            <div className={`${styles.col} ${styles.bgImg}`}>
              <img
                className={`${styles.objectCover} ${styles.objectCenter}`}
                alt="hero"
                src={img}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
    );
};

export default Hero;
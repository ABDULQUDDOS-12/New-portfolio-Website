import React from "react";
import styles from "./Index.module.css";
import dotsImage from "../../../images/dots.png";
const Index = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.leftHandImage}>
        <img src={dotsImage} alt="" className={styles.leftImage} />
      </div>
      <div className={styles.middleContainer}>
        <h1>Bella Morri</h1>
        <p>
          For any services regarding 3d modeling, animation, environments, 2d
          illustrations, graphic design and branding.
        </p>
      </div>
      <div className={styles.rightHandContainer}>
        <img src={dotsImage} alt="" className={styles.rightImage} />
      </div>
    </div>
  );
};

export default Index;

"use client"; // if it uses client-side features
import styles from "../styles/hero.module.css";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <h1>Welcome to My Site</h1>
    </div>
  );
};

export default Hero;

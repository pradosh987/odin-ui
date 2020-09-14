import styles from "../styles/Home.module.css";
import React from "react";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      ❣ Made By:
      <a
        href="https://pradoshgaonkar.dev"
        target="_blank"
        rel="noopener noreferrer nofollow"
        className="pl-2"
      >
        Pradosh Gaonkar
      </a>
      ❣
    </footer>
  );
};

import React from "react";
import styles from "../styles/UserInfo.module.css";

const UserInfo = () => {
  return (
    <div className={styles.container}>
      <h1 className={`${styles.text} ${styles.name}`}>William Ma</h1>
      <p className={`${styles.text} ${styles.bio}`}>
        Student | Full Stack Web Developer
      </p>
    </div>
  );
};

export default UserInfo;

import React from "react";
import styles from "../styles/UserNotFound.module.css";

const UserNotFound = () => {
  return (
    <main className={styles.main}>
      <h1 className={styles.heading}>User Not Found</h1>
      <p className={styles.text}>
        Create your own card with <a className={styles.link}>Carded.Id</a>
      </p>
    </main>
  );
};

export default UserNotFound;

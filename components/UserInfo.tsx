import React, { FC } from "react";
import styles from "../styles/UserInfo.module.css";

interface UserInfoProps {
  name: string;
  bio: string;
}

const UserInfo: FC<UserInfoProps> = ({ name, bio }) => {
  return (
    <div className={styles.container}>
      <h1 className={`${styles.text} ${styles.name}`}>{name}</h1>
      <p className={`${styles.text} ${styles.bio}`}>{bio}</p>
    </div>
  );
};

export default UserInfo;

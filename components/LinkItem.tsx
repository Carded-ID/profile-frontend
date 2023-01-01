import React, { FC } from "react";
import styles from "../styles/LinkItem.module.css";
import { LinkData } from "../types/UserData";

interface LinkItemProps {
  linkData: LinkData;
}
const LinkItem: FC<LinkItemProps> = ({ linkData }) => {
  return (
    <a
      className={styles.linkContainer}
      href={linkData.url}
      target="_blank"
      rel="noopener noreferrer"
    >
      {linkData.title}
    </a>
  );
};

export default LinkItem;

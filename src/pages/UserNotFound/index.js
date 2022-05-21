import React from "react";
import styles from "./styles.module.css";
import UserNotFoundIcon from "../../assets/icons/UserNotFoundIcon.svg";
import { EmptyPageBlock } from "../../components/EmptyPageBlock";

export const UserNotFound = () => {
  return (
    <div className={styles.container}>
      <EmptyPageBlock text='User not Found' icon={UserNotFoundIcon}/>
    </div>
  );
};

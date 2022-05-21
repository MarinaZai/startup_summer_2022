import React from "react";
import styles from "./styles.module.css";

export const EmptyPageBlock = (props) => {
  return (
    <div className={styles.container}>
      <img width={65} src={props.icon} alt={props.text} />
      <span>{props.text}</span>
    </div>
  );
};

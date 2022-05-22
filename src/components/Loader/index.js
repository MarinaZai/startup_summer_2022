import React from "react";
import styles from "./styles.module.css";

export const Loader = (props) => {
  return (
    <div className={`${styles.ldsRing} ${props.isLoader ? "" : styles.hidden}`}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

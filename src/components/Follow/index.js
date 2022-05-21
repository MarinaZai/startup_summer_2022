import React from "react";
import styles from "./styles.module.css";

export const Follow = (props) => {
    return (
        <div className={styles.container}>
          <img src={props.icon} alt={props.text} />
          <span>{props.text}</span>
        </div>
    )
}
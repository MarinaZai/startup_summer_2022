import React from "react";
import styles from "./styles.module.css";

export const RepositoryItem = (props) => {
  return (
    <div className={styles.container}>
      <a
        href={props.repository.html_url}
        target="_blank"
        className={styles.title}
        rel="noreferrer"
      >
        {props.repository.name}
      </a>
      <div className={styles.description}>{props.repository.description}</div>
    </div>
  );
};

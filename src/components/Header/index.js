import React from "react";
import styles from "./styles.module.css";
import GitLogo from "../../assets/icons/GitLogo.svg";
import { Input } from "../Input";

export const Header = (props) => {
  return (
    <header className={styles.container}>
      <img width={40} height={40} src={GitLogo} alt="Logo" />
      <div style={{maxWidth: "500px", flexBasis: '500px'}}>
        <Input onSubmit={props.getUserData} />
      </div>
    </header>
  );
};

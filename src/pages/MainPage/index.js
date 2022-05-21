import React from "react";
import styles from "./styles.module.css";
import SearchingIcon from "../../assets/icons/SearchingIcon.svg";
import { EmptyPageBlock } from "../../components/EmptyPageBlock";
import Avatar from "../../assets/img/avatar.png";

import { Profile } from "../../components/Profile";


export const MainPage = () => {
  return (
    <div className={styles.container}>
      <Profile avatar={Avatar} followers={65.8} following={172} name='Dan Abramov' nickname='gaearon'/>
    </div>
  );
};

import React from "react";
import styles from "./styles.module.css";
import { Follow } from "../Follow";
import FollowersIcon from "../../assets/icons/FollowersIcon.svg";
import FollowingIcon from "../../assets/icons/FollowingIcon.svg";



export const Profile = (props) => {
  return (
    <div className={styles.container}>
      <img className={styles.userAvatar} src={props.avatar} alt="Avatar" />
      <h2>{props.name}</h2>
      <a
        className={styles.nickname}
        rel="noreferrer"
        href="https://google.com"
        target="_blank"
      >
       {props.nickname}
      </a>
      <div className={styles.follow}>
        <Follow icon={FollowersIcon} text={`${props.followers} followers`} />
        <Follow icon={FollowingIcon} text={`${props.following} following`} />
      </div>
    </div>
  );
};

import React from "react";
import { EmptyPageBlock } from "../../components/EmptyPageBlock";
import RepositoriesNotFoundIcon from "../../assets/icons/RepositoriesNotFoundIcon.svg";
import styles from "./styles.module.css";
import { Profile } from "../../components/Profile";

export const RepositoriesNotFound = (props) => {
  return (
    <div className={styles.container}>
      <Profile
        avatar={props.userData?.avatar_url}
        followers={props.userData?.followers}
        following={props.userData?.following}
        name={props.userData?.name}
        nickname={props.userData?.login}
        htmlUrl={props.userData?.html_url}
      />
      <EmptyPageBlock
        text="Repositories Not Found"
        icon={RepositoriesNotFoundIcon}
      />
    </div>
  );
};

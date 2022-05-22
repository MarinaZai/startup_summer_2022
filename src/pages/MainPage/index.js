import React from "react";
import styles from "./styles.module.css";
import { EmptyPageBlock } from "../../components/EmptyPageBlock";
import { Profile } from "../../components/Profile";
import { RepositoriesList } from "../../components/RepositoriesList";
import RepositoriesNotFoundIcon from "../../assets/icons/RepositoriesNotFoundIcon.svg";

export const MainPage = (props) => {
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
      {props.userRepositories ? (
        <RepositoriesList
          repositories={props.userRepositories}
          totalCount={props.userData?.public_repos}
          userName={props.userData?.login}
          onPageChange={props.getRepositories}
        />
      ) : (
        <div className={styles.emptyPage}>
          <EmptyPageBlock
            icon={RepositoriesNotFoundIcon}
            text="Repository list is empty"
          />
        </div>
      )}
    </div>
  );
};

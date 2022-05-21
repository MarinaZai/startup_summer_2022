import React from 'react';
import { EmptyPageBlock } from '../../components/EmptyPageBlock';
import RepositoriesNotFoundIcon from "../../assets/icons/RepositoriesNotFoundIcon.svg";
import styles from  './styles.module.css';

export const RepositoriesNotFound = () => {
    return (
        <div className={styles.container}>
        <EmptyPageBlock text='Repositories Not Found' icon={RepositoriesNotFoundIcon}/>
      </div>
    )
}

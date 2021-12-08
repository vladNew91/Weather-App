import React from "react";
import { HomeContentContainer, HomeNavContainer } from "../../containers";
import styles from '../../styles/index.module.css'

export const HomePage: React.FC = (): JSX.Element => {
    return (
        <div className={styles.content}>
            <HomeNavContainer />
            <HomeContentContainer />
        </div>
    );
};

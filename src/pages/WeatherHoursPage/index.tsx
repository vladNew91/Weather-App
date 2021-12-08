import React from 'react';
import { WeatherInputContainer, WeatherContentContainer } from '../../containers';
import styles from '../../styles/index.module.css';

export const WeatherHoursPage: React.FC = (): JSX.Element => {
    return (
        <div className={styles.content}>
            <WeatherInputContainer />
            <WeatherContentContainer />
        </div>
    );
};

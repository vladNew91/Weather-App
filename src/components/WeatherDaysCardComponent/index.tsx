import React from "react";
import styles from "../../styles/index.module.css";

interface WeatherDaysCardComponentProps {
    temp: number;
    icon: string;
    date: string;
}

export const WeatherDaysCardComponent: React.FC<WeatherDaysCardComponentProps> = (
    props: WeatherDaysCardComponentProps
): JSX.Element => {
    return (
        <div className={styles.card}>
            <div className={styles.hourTime}>{props.date}</div>
            <img src={props.icon} alt='icon' />
            <div className={styles.hourTemp}>{props.temp} &#8451;</div>
        </div>
    );
};

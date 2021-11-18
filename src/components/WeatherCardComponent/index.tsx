import React from "react";
import styles from "../../styles/index.module.css";

interface WeatherCardProps {
    temp: number;
    icon: string;
    date: string;
}

export const WeatherCard: React.FC<WeatherCardProps> = (props: WeatherCardProps): JSX.Element => {
    return (
        <div className={styles.card}>
            <img src={props.icon} alt='icon' />
            <div>{props.temp} &deg;</div>
            <div>{props.date}</div>
        </div>
    );
};

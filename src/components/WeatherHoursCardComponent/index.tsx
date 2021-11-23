import React from "react";
import styles from "../../styles/index.module.css";
import { WeatherHour } from "../../types";

interface WeatherHoursCardComponentProps {
    day: string;
    hours: WeatherHour[];
}

export const WeatherHoursCardComponent: React.FC<WeatherHoursCardComponentProps> = (
    props: WeatherHoursCardComponentProps
): JSX.Element => {
    const splitTime = (time: string) => time.split(" ")[1];

    return (
        <div className={styles.hoursCard}>
            <span>{props.day}</span>

            <div className={styles.hoursCardItem}>
                {props.hours.map((hour: WeatherHour, i: number) => (
                    <div className={styles.hoursCardItems} key={i}>
                        <div className={styles.hourTemp}>{hour.temp_c}</div>
                        <div className={styles.hourTime}>{splitTime(hour.time)}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

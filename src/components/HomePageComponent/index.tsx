import React from "react";
import { useHistory } from "react-router";
import styles from "../../styles/index.module.css";
import { days } from "../../constants";
import { WeatherDaysCardComponent } from "../WeatherDaysCardComponent";
import { WeatherDay } from "../../types";

interface HomePageComponentProps {
    city: string;
    weatherDays?: WeatherDay[];
    setCity: (city: string) => void;
}

export const HomePageComponent: React.FC<HomePageComponentProps> = React.memo(
    (props: HomePageComponentProps): JSX.Element => {
        const history = useHistory();
        const goTo = (location: string) => history.push(`${location}${props.city}`);

        return (
            <div className={styles.content}>
                <nav>
                    <button className={styles.btn} onClick={() => props.setCity("Minsk")}>
                        Minsk
                    </button>

                    <button className={styles.btn} onClick={() => props.setCity("Moscow")}>
                        Moscow
                    </button>

                    <button className={styles.btn} onClick={() => props.setCity("Bratislava")}>
                        Bratislava
                    </button>

                    <button className={styles.btnGo} onClick={() => goTo("/in/")}>
                        Weather by hours
                    </button>
                </nav>

                <div className={styles.cityName}>{props.city}</div>

                <div className={styles.contentItem}>
                    {props.weatherDays ? (
                        props.weatherDays.map((el: WeatherDay, i: number) => (
                            <WeatherDaysCardComponent
                                key={i}
                                temp={el.day.maxtemp_c}
                                icon={el.day.condition.icon}
                                date={days[i]}
                            />
                        ))
                    ) : (
                        <div className={styles.loading}>Loading...</div>
                    )}
                </div>
            </div>
        );
    }
);

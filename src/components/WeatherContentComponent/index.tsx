import React from "react";
import { useHistory } from "react-router";
import { WeatherHoursCardComponent } from "..";
import { days } from "../../constants";
import styles from "../../styles/index.module.css";
import { Weather } from "../../types";

interface WeatherContentComponentProps {
    weather?: Weather;
    setCity: (city: string) => void;
}

export const WeatherContentComponent: React.FC<WeatherContentComponentProps> = React.memo((
    props: WeatherContentComponentProps
): JSX.Element => {
    const history = useHistory<string>();
    const goTo = (location: string) => history.push(location);

    return (
        <div className={styles.content}>

            <div className={styles.cardsContent}>
                {props.weather &&
                    props.weather.forecast.forecastday.map(
                        (el, i) => <WeatherHoursCardComponent key={i} day={days[i]} hours={el.hour} />)}
            </div>

            <button className={styles.btnGo} onClick={() => goTo("/")}>
                Go to home page
            </button>
        </div>
    );
},
    (prewProps, nextProps) => {
        if (prewProps.weather?.location.name === nextProps.weather?.location.name) return true;
        return false;
    }
);

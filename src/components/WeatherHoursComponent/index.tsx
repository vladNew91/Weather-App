import React from "react";
import { useHistory } from "react-router";
import { WeatherHoursCardComponent } from "..";
import { days } from "../../constants";
import styles from "../../styles/index.module.css";
import { WeatherDay } from "../../types";

interface WeatherHoursComponentProps {
    weather?: WeatherDay[];
    setCity: (city: string) => void;
}

export const WeatherHoursComponent: React.FC<WeatherHoursComponentProps> = (
    props: WeatherHoursComponentProps
): JSX.Element => {
    const history = useHistory<string>();
    const goTo = (location: string) => history.push(location);

    const path: string = history.location.pathname;
    const cityInPath = path.substring(4, path.length);

    const [cityName, setCityName] = React.useState<string>(cityInPath);
    const [city, setCity] = React.useState<string>(cityInPath);

    const changeCity = () => {
        props.setCity(city);
        setCityName(city);
    };

    return (
        <div className={styles.content}>
            <div>Weather by hours in {cityName}</div>

            <div className={styles.cardsContent}>
                <input
                    type='text'
                    value={city}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCity(e.target.value)}
                />
                <button className={styles.btn} onClick={changeCity}>
                    Change city
                </button>
            </div>

            <div className={styles.cardsContent}>
                {props.weather &&
                    props.weather.map((el, i) => <WeatherHoursCardComponent key={i} day={days[i]} hours={el.hour} />)}
            </div>

            <button className={styles.btnGo} onClick={() => goTo("/")}>
                Go to home page
            </button>
        </div>
    );
};

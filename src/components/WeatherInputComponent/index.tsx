import React from "react";
import { useHistory } from "react-router";
import styles from '../../styles/index.module.css';

interface WeatherInputComponentProps {
    setCity: (city: string) => void;
}

export const WeatherInputComponent: React.FC<WeatherInputComponentProps> = React.memo((props: WeatherInputComponentProps)
: JSX.Element => {
    const history = useHistory();
    const path: string = history.location.pathname;
    const cityInPath = path.substring(4, path.length);

    const [cityName, setCityName] = React.useState<string>(cityInPath);
    const [city, setCity] = React.useState<string>(cityInPath);

    const changeCity = () => {
        if (city.length) {
            props.setCity(city);
            setCityName(city);
            history.push(path.substring(0, 4) + city);
        };
    };

    return (
        <>
            <div>Weather by hours in {cityName}</div>

            <div className={styles.cardsContent}>
                <input
                    type="text"
                    value={city}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCity(e.target.value)}
                />
                <button className={styles.btn} onClick={changeCity}>
                    Change city
                </button>
            </div>
        </>
    );
});

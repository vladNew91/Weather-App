import React from "react";
import { useHistory } from "react-router";
import { API_KEY, PATH } from "../../constants";
import styles from "../../styles/index.module.css";
import { DayInfo } from "../../types";

interface WeatherHoursComponentProps {
    callDays: () => void;
}

export const WeatherHoursComponent: React.FC<WeatherHoursComponentProps> = ({
    callDays,
}: WeatherHoursComponentProps): JSX.Element => {
    const history = useHistory<string>();
    const goTo = (location: string) => history.push(location);
    const path: string = history.location.pathname;

    const [weather, setWeather] = React.useState<DayInfo>();

    const cityNAme: string = path.substring(4, path.length);

    React.useEffect(() => {
        fetch(`${PATH}${API_KEY}&q=${cityNAme}&days=10`)
            .then((res) => res.json())
            .then((json) => {
                setWeather(
                    json.forecast.forecastday.map((el: DayInfo) => {
                        return {
                            date: el.date,
                        };
                    })
                );
            });
    }, [cityNAme]);

    return (
        <div className={styles.content}>
            <div>Weather by hours in {cityNAme}</div>

            {!weather ? (
                <div>Loading...</div>
            ) : (
                <div>
                    <div>
                        <div>{weather.date}</div>
                        <div></div>
                    </div>
                    <div></div>
                    <div></div>
                </div>
            )}

            <button onClick={callDays}>Store</button>

            <button className={styles.btnGo} onClick={() => goTo("/")}>
                Weather by hours
            </button>
        </div>
    );
};

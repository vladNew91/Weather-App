import React from "react";
import { useHistory } from "react-router";
import styles from "../../styles/index.module.css";
import { DayInfo } from "../../types";
import { WeatherCard } from "..";
import { API_KEY, days, PATH } from "../../constants";

interface HomePageComponentProps {
    // onSubmit: (todo: Todo) => void;
}

export const HomePageComponent: React.FC<HomePageComponentProps> = (props: HomePageComponentProps): JSX.Element => {
    const history = useHistory();
    const goTo = (location: string) => history.push(`${location}${city}`);

    const [city, setCity] = React.useState<string>("Minsk");
    const [weather, setWeather] = React.useState<DayInfo[]>();

    React.useEffect(() => {
        fetch(`${PATH}${API_KEY}&q=${city}&days=10`)
            .then((res) => res.json())
            .then((json) => {
                setWeather(
                    json.forecast.forecastday.map((el: DayInfo) => {
                        return {
                            city: json.location.name,
                            temp: el.day.maxtemp_c,
                            icon: el.day.condition.icon,
                            date: el.date,
                        };
                    })
                );
            });
    }, [city]);

    return (
        <div className={styles.content}>
            <nav>
                <button className={styles.btn} onClick={() => setCity("Minsk")}>
                    Minsk
                </button>

                <button className={styles.btn} onClick={() => setCity("Moscow")}>
                    Moscow
                </button>

                <button className={styles.btn} onClick={() => setCity("Bratislava")}>
                    Bratislava
                </button>

                <button className={styles.btnGo} onClick={() => goTo("/in/")}>
                    Weather by hours
                </button>
            </nav>

            <div className={styles.cityName}>{city}</div>

            <div style={{ display: "flex" }}>
                {weather ? (
                    weather.map((el: DayInfo, i: number) => (
                        <WeatherCard key={i} temp={el.temp} icon={el.icon} date={days[i]} />
                    ))
                ) : (
                    <div style={{ color: "white", textAlign: "center", width: "100%" }}>Loading...</div>
                )}
            </div>
        </div>
    );
};

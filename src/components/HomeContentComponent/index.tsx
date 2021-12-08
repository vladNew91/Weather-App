import React from 'react';
import styles from '../../styles/index.module.css';
import { days } from '../../constants';
import { WeatherDaysCardComponent } from '../WeatherDaysCardComponent';
import { Weather, WeatherDay } from '../../types';

interface HomeContentComponentProps {
    weather?: Weather;
}

export const HomeContentComponent: React.FC<HomeContentComponentProps> = React.memo(
    (props: HomeContentComponentProps): JSX.Element => {
        return (
            <>
                <div className={styles.cityName}>{props.weather?.location.name}</div>

                <div className={styles.contentItem}>
                    {props.weather ? (
                        props.weather.forecast.forecastday.map((el: WeatherDay, i: number) => (
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
            </>
        );
    },
    (prewProps, nextProps) => {
        if (prewProps.weather?.location.name === nextProps.weather?.location.name) return true;
        return false;
    }
);

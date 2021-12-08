import React from "react";
import { useSelector } from "react-redux";
import { WeatherContentComponent } from "../../components";
import { selectWeather } from "../../modules/selectors";

export const WeatherContentContainer: React.FC = (): JSX.Element => {
    const weather = useSelector(selectWeather);

    return <WeatherContentComponent weather={weather} />;
};

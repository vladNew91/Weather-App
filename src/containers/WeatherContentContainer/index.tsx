import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { WeatherContentComponent } from "../../components";
import { weatherRequest } from "../../modules/actions";
import { selectWeather } from "../../modules/selectors";

export const WeatherContentContainer: React.FC = (): JSX.Element => {
    const weather = useSelector(selectWeather);

    const dispatch = useDispatch();

    const setCity = (city: string) => {
        localStorage.setItem("city", city);
        dispatch(weatherRequest());
    };

    return <WeatherContentComponent weather={weather} setCity={setCity} />;
};

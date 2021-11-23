import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { WeatherHoursComponent } from "../../components";
import { weatherRequest } from "../../modules/actions";
import { selectWeather } from "../../modules/selectors";

export const WeatherHoursContainer = () => {
    const weatherhours = useSelector(selectWeather);

    const dispatch = useDispatch();

    const setCity = (city: string) => {
        localStorage.setItem("city", city);
        dispatch(weatherRequest());
    };

    React.useEffect(() => {
        dispatch(weatherRequest());
    }, [dispatch]);

    return <WeatherHoursComponent weather={weatherhours} setCity={setCity} />;
};

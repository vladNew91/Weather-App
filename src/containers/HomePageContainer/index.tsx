import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { HomePageComponent } from "../../components";
import { weatherRequest } from "../../modules/actions";
import { selectWeather } from "../../modules/selectors";

export const HomePageContainer: React.FC = (): JSX.Element => {
    const weatherDays = useSelector(selectWeather);
    const city = localStorage.getItem("city");

    const dispatch = useDispatch();

    const setCity = (city: string) => {
        localStorage.setItem("city", city);
        dispatch(weatherRequest());
    };

    React.useEffect(() => {
        dispatch(weatherRequest());
    }, [dispatch]);

    return <HomePageComponent setCity={setCity} weatherDays={weatherDays} city={city} />;
};

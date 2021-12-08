import React from "react";
import { useDispatch } from "react-redux";
import { WeatherInputComponent } from "../../components";
import { weatherRequest } from "../../modules/actions";

export const WeatherInputContainer: React.FC = (): JSX.Element => {
    const dispatch = useDispatch();

    const setCity = React.useCallback((city: string) => {
        localStorage.setItem("city", city);
        dispatch(weatherRequest());
    },[dispatch]);

    React.useEffect(() => {
        dispatch(weatherRequest());
    }, [dispatch]);

    return <WeatherInputComponent setCity={setCity} />
};

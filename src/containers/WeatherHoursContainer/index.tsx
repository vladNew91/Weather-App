import { useDispatch, useSelector } from "react-redux";
import { WeatherHoursComponent } from "../../components";
import { selectWeatherData, weatherListRequest } from "../../modules";

export const WeatherHoursContainer = () => {
    const days = useSelector(selectWeatherData);

    const dispatch = useDispatch();

    const callDays = () => {
        dispatch(weatherListRequest());
    };
    return <WeatherHoursComponent callDays={callDays} />;
};

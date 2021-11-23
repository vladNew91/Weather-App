import { AppState } from '.';

export const selectWeather = (state: AppState) => state.weather.data?.forecast.forecastday;

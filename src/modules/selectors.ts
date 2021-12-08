import { Weather } from './../types';
import { AppState } from '.';

export const selectWeather = (state: AppState): Weather | undefined => state.weather.data;

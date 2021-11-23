import { Action } from 'redux';
import { Weather } from '../../types';
import { WEATHER_FAILURE, WEATHER_REQUEST, WEATHER_SUCCESS } from '../constants';

export interface WeatherRequest extends Action {
    type: typeof WEATHER_REQUEST;
}

export interface WeatherSuccess extends Action {
    type: typeof WEATHER_SUCCESS;
    data: Weather;
}

export interface WeatherFailure extends Action {
    type: typeof WEATHER_FAILURE;
    error: unknown;
}

export type WeatherAction =
    WeatherRequest |
    WeatherSuccess |
    WeatherFailure;

export const weatherRequest = (): WeatherRequest => ({ type: WEATHER_REQUEST });

export const weatherSuccess = (data: Weather): WeatherSuccess => ({
    type: WEATHER_SUCCESS,
    data,
});

export const weatherFailure = (error: unknown): WeatherFailure => ({
    type: WEATHER_FAILURE,
    error,
});

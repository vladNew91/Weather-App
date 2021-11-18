import { Action } from 'redux';
import { DayInfo } from '../../../types';
import { WEATHER_LIST_FAILURE, WEATHER_LIST_REQUEST, WEATHER_LIST_SUCCESS } from '../constants';

export interface WeatherListRequest extends Action {
    type: typeof WEATHER_LIST_REQUEST;
}

export interface WeatherListSuccess extends Action {
    type: typeof WEATHER_LIST_SUCCESS;
    data: DayInfo[];
}

export interface WeatherListFailure extends Action {
    type: typeof WEATHER_LIST_FAILURE;
    error: unknown;
}

export type WeatherListAction =
    WeatherListRequest |
    WeatherListSuccess |
    WeatherListFailure;

export const weatherListRequest = (): WeatherListRequest => ({type: WEATHER_LIST_REQUEST});

export const weatherListSuccess = (data: DayInfo[]): WeatherListSuccess => ({
    type: WEATHER_LIST_SUCCESS,
    data,
});

export const weatherListFailure = (error: unknown): WeatherListFailure => ({
    type: WEATHER_LIST_FAILURE,
    error,
});

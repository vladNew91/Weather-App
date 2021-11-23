import { Weather } from '../../types';
import { WeatherAction } from '../actions';
import { WEATHER_FAILURE, WEATHER_REQUEST, WEATHER_SUCCESS } from '../constants';

export interface WeatherState {
    loading: boolean;
    success: boolean;
    failure: boolean;
    data?: Weather;
    error?: unknown;
}

const initialState: WeatherState = {
    loading: false,
    success: false,
    failure: false,
};

export const weatherReducer = (
    state: WeatherState = initialState,
    action: WeatherAction
): WeatherState => {
    switch (action.type) {
        case WEATHER_REQUEST:
            return {
                ...state,
                loading: true,
                success: false,
                failure: false,
                error: undefined,
            };
        case WEATHER_SUCCESS:
            return {
                ...state,
                loading: false,
                success: true,
                data: action.data,
            };
        case WEATHER_FAILURE:
            return {
                ...state,
                loading: false,
                failure: true,
                success: false,
                error: action.error,
            };
        default:
            return state;
    }
};

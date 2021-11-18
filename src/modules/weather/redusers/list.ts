import { WeatherListAction } from './../actions/list';
import { DayInfo } from '../../../types';
import { WEATHER_LIST_FAILURE, WEATHER_LIST_REQUEST, WEATHER_LIST_SUCCESS } from '../constants';

export interface WeatherListState {
    loading: boolean;
    success: boolean;
    failure: boolean;
    data?: DayInfo[];
    error?: unknown;
}

const initialState: WeatherListState = {
    loading: false,
    success: false,
    failure: false,
};

export const WeatherListReducer = (
    state: WeatherListState = initialState,
    action: WeatherListAction
): WeatherListState => {
    switch (action.type) {
    case WEATHER_LIST_REQUEST:
        return {
            ...state,
            loading: true,
            success: false,
            failure: false,
            error: undefined,
        };
    case WEATHER_LIST_SUCCESS:
        return {
            ...state,
            loading: false,
            success: true,
            data: action.data,
        };
    case WEATHER_LIST_FAILURE:
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

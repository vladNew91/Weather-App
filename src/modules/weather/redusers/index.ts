import { combineReducers } from 'redux';
import { WeatherListReducer, WeatherListState } from './list';

export interface WeatherState {
    list: WeatherListState;
}

export const weatherReducer = combineReducers({
    list: WeatherListReducer,
});

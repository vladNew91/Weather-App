import { AppState } from '../';
import { DayInfo } from '../../types';

export const selectWeatherData = (state: AppState): DayInfo[] => {
    return state.weather.list.data ?? [];
};

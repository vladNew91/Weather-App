import { put, call } from 'redux-saga/effects';
import { requestBuilder } from '../../../helpers';
import { DayInfo } from '../../../types';
import {
    weatherListFailure,
    weatherListSuccess,
} from '../actions/list';

const city = localStorage.getItem('city');

export default function* ListRequestSaga()
{
    try {
        const data: DayInfo[] = yield call(requestBuilder, city);

        yield put(weatherListSuccess(data));
    } catch (error) {
        yield put(weatherListFailure(error));
    }
}

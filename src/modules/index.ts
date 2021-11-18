import { WeatherListRequestSaga } from './weather/sagas/index';
import { WeatherState, weatherReducer } from './weather/redusers/index';
import {
    applyMiddleware,
    combineReducers,
    compose,
    createStore,
} from 'redux';
import createSagaMiddleware from 'redux-saga';
import { takeEvery } from 'redux-saga/effects';
import { WEATHER_LIST_REQUEST } from './weather/constants';

export * from './weather';

export interface AppState {
    weather: WeatherState;
}

const appReducer = combineReducers({
    weather: weatherReducer,
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

function* appSaga() {
    yield takeEvery(WEATHER_LIST_REQUEST, WeatherListRequestSaga);
}

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
    appReducer,
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    composeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(appSaga);

import { WEATHER_REQUEST } from './constants';
import createSagaMiddleware from "@redux-saga/core";
import { takeEvery } from "@redux-saga/core/effects";
import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { weatherReducer, WeatherState } from "./redusers";
import { WeatherRequestSaga } from './sagas';

export interface AppState {
    weather: WeatherState;
}

const appReducer = combineReducers({
    weather: weatherReducer,
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// preparing sagas
function* appSaga() {
    yield takeEvery(WEATHER_REQUEST, WeatherRequestSaga);
};

const sagaMiddleware = createSagaMiddleware();

//create store
export const store = createStore(appReducer, composeEnhancers(applyMiddleware(sagaMiddleware)));

//runs sagas
sagaMiddleware.run(appSaga);

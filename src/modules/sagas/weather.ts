import { call, put, CallEffect, PutEffect } from "@redux-saga/core/effects";
import axios, { AxiosResponse } from "axios";
import { API_KEY, PATH } from "../../constants";
import { Weather } from "../../types";
import { WeatherFailure, weatherFailure, WeatherRequest, WeatherSuccess, weatherSuccess } from "../actions";

interface Response<T> { data: T }

function requestWeather() {
    return axios(`${PATH}${API_KEY}&q=${localStorage.getItem("city") || "Minsk"}&days=10`);
};

export default function* WeatherRequestSaga(action: WeatherRequest):
    Generator<CallEffect<AxiosResponse<Weather>> |
        PutEffect<WeatherSuccess | WeatherFailure>> {
    try {
        const { data } = (yield call(requestWeather)) as Response<Weather>;;

        yield put(weatherSuccess(data));
    } catch (error) {
        yield put(weatherFailure(error));
    }
};

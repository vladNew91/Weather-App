import axios from 'axios';
import { DayInfo } from '../types';

export async function requestBuilder(city: string | null) {
    const res = axios.get(`https://api.weatherapi.com/v1/forecast.json?key=bea343cf63cc4d958a9130923212710&q=${city}&days=10`)
    .then(json => json.data)
    .then(resolve => console.log(
        resolve.forecast.forecastday.map((el: DayInfo) => {
            return {
                city: resolve.location.name,
                temp: el.day.maxtemp_c,
                icon: el.day.condition.icon,
                date: el.date,
            };
        })
    ))
}

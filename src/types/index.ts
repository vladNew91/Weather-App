export interface WeatherHour {
    time: string;
    temp_c: number;
}

export interface WeatherDay {
    day: {
        maxtemp_c: number,
        condition: { icon: string }
    };
    hour: WeatherHour[];
}

export interface Weather {
    forecast: {
        forecastday: WeatherDay[]
    };
}

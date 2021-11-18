export interface DayInfo {
    city: string,
    temp: number,
    date: string,
    day: {
        maxtemp_c: number,
        condition: {icon: string},
    },
    icon: string,
}

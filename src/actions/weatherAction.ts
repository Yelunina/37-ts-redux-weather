import { WeatherInfo } from "../utils/types"

export const PUT_WEATHER_INFO = 'PUT_WEATHER_INFO'
export const PUT_MESSAGE = 'PUT_MESSAGE'

export const putWeatherInfo = (weatherInfo: WeatherInfo) => ({
    type: PUT_WEATHER_INFO,
    payload: weatherInfo
})

export const putMessage = (message: string) => ({
    type: PUT_MESSAGE,
    payload: message
})
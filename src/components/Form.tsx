import React, { useState } from 'react';
import { api_key, base_url } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { putMessage, putWeatherInfo } from '../actions/weatherAction';

const Form = () => {

    const [city, setCity] = useState('');
    const dispatch = useDispatch();

    const getCity = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        getWeather(city);
        setCity('');
    }

    const getWeather = async (city: string) => {
        try {
            const response = await fetch(`${base_url}?q=${city}&appid=${api_key}&units=metric`)
            const data = await response.json();
            dispatch(putWeatherInfo({
                city: data.name,
                country: data.sys.country,
                temp: data.main.temp,
                pressure: data.main.pressure,
                sunset: data.sys.sunset
            }));
        } catch (e) {
            dispatch(putMessage('Enter correct city name'));
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCity(e.target.value);
    }

    return (
        <form onSubmit={getCity}>
            <input value={city} onChange={handleChange} type='text' />
            <button type='submit'>Get weather</button>
        </form>
    )
}

export default Form
import React, { useContext, useEffect, useState } from 'react'
import search from '../../../public/search.png'
import temperature from '../../../public/temperature-sensor.png'
import './Search.css';
import axios from 'axios'
import { ProductContext } from './Context/ContextProvider';
function Render() {
    const { setWheather, apiKey, city, weather, ListIcon } = useContext(ProductContext)
    const fetchData = async () => {
        try {
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
            setWheather(response.data);
        }
        catch (error) {
            console.log(error);
            alert('This location is not in API now')
        }
    }
    useEffect(() => {
        fetchData()
    }, [city])
    const matchingIcon = ListIcon.find(icon => icon.type === weather.weather[0].main);
    return (
        <div className='render'>
            <h2>{weather.name}</h2>
            <img src={matchingIcon.img} alt="" className='imgInput1' />
            <h3>{weather.weather[0].main}</h3>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <img src={temperature} alt="" className='imgInput' />
                <h3>{weather.main.temp}°C</h3>
            </div>

        </div>
    )
}

export default Render

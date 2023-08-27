import React from 'react'
import { createContext, useState } from 'react'
import PropTypes from 'prop-types';
export const ProductContext = createContext();

function ContextProvider({ children }) {

    const ListIcon = [
        {
            type: "Clear",
            img: "https://cdn-icons-png.flaticon.com/512/6974/6974833.png",
        },
        {
            type: "Rain",
            img: "https://cdn-icons-png.flaticon.com/512/3351/3351979.png",
        },
        {
            type: "Snow",
            img: "https://cdn-icons-png.flaticon.com/512/642/642102.png",
        },
        {
            type: "Clouds",
            img: "https://cdn-icons-png.flaticon.com/512/414/414825.png",
        },
        {
            type: "Haze",
            img: "https://cdn-icons-png.flaticon.com/512/1197/1197102.png",
        },
        {
            type: "Smoke",
            img: "https://cdn-icons-png.flaticon.com/512/4380/4380458.png",
        },
        {
            type: "Mist",
            img: "https://cdn-icons-png.flaticon.com/512/4005/4005901.png",
        },
        {
            type: "Drizzle",
            img: "https://cdn-icons-png.flaticon.com/512/3076/3076129.png",
        },
    ]
    const [weather, setWheather] = useState({});
    const apiKey = '53d2b9e5ffc4c41135c1487777c28306';
    const [cityFinal, setCityFinal] = useState('');
    const [city, setCity] = useState('');

    const handleInput = (event) => {
        setCityFinal(event.target.value)
    }

    const handleClick = (event) => {
        event.preventDefault();
        setCity(cityFinal);
    }

    return (
        <ProductContext.Provider value={{
            weather,
            setWheather,
            apiKey,
            city,
            handleInput,
            handleClick,
            cityFinal, ListIcon
        }}>
            {children}
        </ProductContext.Provider>
    )
}
ContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
}
export default ContextProvider

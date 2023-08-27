import React, { useContext } from 'react'
import search from '../../../public/search.png'
import './Search.css'
import { ProductContext } from './Context/ContextProvider'
function Search() {
    const { cityFinal, handleInput, handleClick } = useContext(ProductContext);

    return (
        <div>
            <form action="" className='formInput'>
                <input
                    type="text"
                    placeholder='Input the name of city you want to search'
                    className='Input'
                    value={cityFinal}
                    onChange={handleInput}
                />
                <button className='btn'>
                    <img src={search} onClick={handleClick} className='imgInput' />
                </button>
            </form>
        </div>
    )
}

export default Search

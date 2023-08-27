import React from 'react'
import Search from './Search'
import Render from './Render'

function FormContainer() {
    return (
        <div style={{
            width: 350,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            border: '1px solid black',
            borderRadius: 5
        }}>
            <Search></Search>
            <Render></Render>
        </div>
    )
}

export default FormContainer

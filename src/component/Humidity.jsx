import React from 'react'
import humidity from '../assets/humidity.png'

export default function Humidity({ main , Humidity }) {
  return (
    <div style={main} className='card'>
        <h1>{Humidity}%</h1>
        <img src={humidity} alt={humidity} width={100} />
        <h3>Humidity</h3>
    </div>
  )
}

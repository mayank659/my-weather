import React from 'react'
import storm from '../assets/storm.png'
export default function Wind({ main , Speed }) {
  return (
    <div style={main}>
            <h1>{Speed}</h1>
            <img src={storm} alt={storm} width={100} />
            <h3>Wind Speed</h3>
    </div>
  )
}

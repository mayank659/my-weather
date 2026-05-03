import './App.css'
import rainy from './assets/rainy.png'
import sunny from './assets/sun.png'
import cloudy from './assets/cloudy.png'
import storm from './assets/thunderstorm.png'
import haze from './assets/haze.png'
import dust from './assets/dust.png'
import { useState } from 'react'
import axios from 'axios'
import Humidity from './component/Humidity'
import Wind from './component/Wind'

export default function App() {
  const [weather, setWeather] = useState(null)
  const [temperature, setTemperature] = useState(null)
  const [condition, setCondition] = useState(null)
  const [city, setCity] = useState('')
  const [second, setSecond] = useState(null)
  const [humidity,sethumidity] = useState(null)
  const [speed,setSpeed] = useState(null)

  const getWeather = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a8abe58c7d076d9f3cfec8441e4082bd&units=metric&lang=eng`
      )
      setWeather(response.data.name)
      setTemperature(Math.floor(response.data.main.temp))
      setSecond(response.data.weather[0].main)
      sethumidity(response.data.main.humidity)
      setSpeed(response.data.wind.speed)
      console.log(response.data)
      switch (response.data.weather[0].main) {
        case 'Clear':
          setCondition(sunny)
          break
        case 'Clouds':
          setCondition(cloudy)
          break
        case 'Rain':
          setCondition(rainy)
          break
        case 'Thunderstorm':
          setCondition(storm)
          break
        case 'Haze':
            setCondition(haze)
            break
        case 'Dust':
            setCondition(dust)
            break
        default:
          setCondition(response.data.weather[0].main)
      }
    } catch (error) {
      console.error('Error fetching weather data:', error)
    }
  }

  return (
      <div style={body}>
        <h1>My weather app</h1>
        <div style={real}>  
           { weather && <Humidity main={main} Humidity={humidity}/> }

        <div style={main}>
                   {/* search */}
          <div className="search" style={search}>
            <input type="text" placeholder="Enter city name..." style={input} value={city} onChange={(e) => setCity(e.target.value)} onKeyDown={(e) =>{if(e.key==='Enter'){getWeather();}}}/>
            <button style={btn} onClick={getWeather}>
              <i className='fa-solid fa-magnifying-glass'></i>
            </button>
          </div>

          {/* weather info */}
          { weather && (
            <div className="weather-info" style={info}>
              <img src={condition} alt={condition} width={100} />
              <h3 style={{marginTop : '5px',}}>{second}</h3>
              <h1>{temperature}°C</h1>
              <h2>{weather}</h2>
            </div>
          )}
          </div>
    
    { weather && <Wind main={main} Speed={speed}/> }
        </div>
     
      </div>
  )
}
/* https://api.openweathermap.org/data/2.5/weather?q={Delhi}&appid=a8abe58c7d076d9f3cfec8441e4082bd&units=metric&lang=hi */

let search = {
  display: 'flex',
  gap: '10px',
}

let real = {

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: 'auto',
  width: 'auto',
  gap : '20px',
  flexWrap: 'wrap',
  padding: '20px',
}

let main = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  height: 'auto',
  borderRadius: '20px',
  width: 'auto',
  padding: '40px',
  gap: '30px',
  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  color: 'white',
}

let btn = {
  padding: '20px',
  borderRadius: '20px',
  border: 'none',
  backgroundColor: '#4CAF50',
  color: 'white',
  cursor: 'pointer',
  display: 'flex',
  outline :'none',
  alignItems: 'center',
  fontSize: '16px',
  justifyContent: 'center',
}

let input = {
  padding: '10px 10px 10px 20px',
  borderRadius: '20px',
  border: 'none',
  fontSize: '16px',
  width: '200px',
  outline : 'none',
}

let body = {
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height : '100%',
    width: '100%',
    minHeight: '100dvh',
    color : 'white', 
    gap : '20px',
    background: '#000000ef',
}

let info = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}
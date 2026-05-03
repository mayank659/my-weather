import './App.css'


export default function App() {
  return (
      <div style={body}>
        <h1>My weather app</h1>
        <div style={main}>

          {/* search */}

          <div className="search" style={search}>
            <input type="text" placeholder="Enter city name..." style={input} />
            <button style={btn}><i className='fa-solid fa-magnifying-glass'></i></button>
          </div>

          {/* weather info */}
          <div className="weather-info" style={info}>
            <img src="https://cdn-icons-png.flaticon.com/512/1163/1163661.png" alt="weather icon" width={100} />
            <h3 style={{marginTop : '5px'}}>Sunny</h3>
            <h1>25°C</h1>
            <h2>City Name</h2>
          </div>

        </div>
      </div>
  )
}


let search = {
  display: 'flex',
  gap: '10px',
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
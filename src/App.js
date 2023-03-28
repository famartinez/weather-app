import './App.css';
import { useState } from 'react';


const api = {
  key: "11195cc9508a10b340476dcff2410b58",
  base: "https://api.openweathermap.org/data/2.5/",
}

function App() {

  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState({});

  const searchPressed = () => {
    fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
    .then((res) => res.json())
    .then((result) => {
      setWeather(result);
    });


  
  };
  return (
    <div className="App">
      <header className="App-header">
        {/* HEADER */}
        <h1>Weather App</h1>
        <div>
                {/* Search Box */}
                <input type='test'
                placeholder="Enter city/town..."
                onChange={(e) => setSearch(e.target.value)}

                /> 

                <button onClick={searchPressed}>Search</button>
                </div>

                {typeof weather.main !== "undefined" ? (
                
                <div>
              
                {/* Location */}
                <p>{weather.name}</p>

                {/* Temperature */}
                <p>{weather.main.temp} ºC</p>


                {/* Condition */}
                <p>{weather.weather[0].main} </p>
                <p>({weather.weather[0].description}) </p>
                </div>
                ) : (
                 ""
                )}



      </header>
    </div>
  );
}

export default App;

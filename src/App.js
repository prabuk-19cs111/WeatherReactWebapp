import React, { useState } from 'react';
const api={
  key:"e0888ff86e9b9e4479c3bdfb15ee0610",
  base:"https://api.openweathermap.org/data/2.5/"
}


function App() {
  const [query,setQuery] = useState('');
  const [weather,setWeather] = useState('');

  const search = evt => {
    if (evt.key == "Enter") {
    fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
    .then(res => res.json())
    .then(result => {
      
      setWeather(result);
      setQuery('');
      console.log(result);
    });

  }
}

  const dateBuilder = (d) => {
    let months=["January","February","March","April","May","June","July","August","September","October","November","December"];
    let days=["Sunday","Tuesday","Wednesday","Thursday","friday","Saturday"];
    
    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`
  }
  return (
    <div className={
      (typeof weather.main != "undefined") ?
       ((weather.main.temp > 16)
        ? 'warm' :
         'app') :
          'app' }>
      <main>
        <div className="sbox">
          <input 
          type="text"
          className="sbar"
          placeholder="Search.........."
          onChange={e => setQuery(e.target.value)}
          value={query}
          onKeyPress={search}
          />
          </div>
          {(typeof weather.main != "undefined") ? (
          <div>
            <div className="loctionbox">
            <div className="location">{weather.name}</div>
            <div className="date">{dateBuilder(new Date())}</div>
          </div><div className="weatherbox">
              <div className="temp">
                {Math.round(weather.main.temp)} ºc
              </div>
              <div className="weather">{weather.weather[0].main}</div>
            </div>
            </div>
           ): ('')}
          
      </main>
      </div>
  );
}

export default App;

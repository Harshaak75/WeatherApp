import { useState } from 'react'
import Welcome from './Components/WelcomePage/Welcome'
import { WeatherWrapper } from "./Context"
import WeatherList from './Components/WeatherList/WeatherList'
import { useEffect } from 'react';


function App() {
  const [weatherObj, setadd] = useState([]);

  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();

  const formattedTime = `${hours}:${minutes}`;

  const addWeather = (data) => {
    const keyExist = weatherObj.some(item => item.id === data.id);

    if(!keyExist){
      setadd([...weatherObj, data])
    }
    else{
      // console.log("Item is present");
      alert("You already have a weather")
    }
    // console.log(weatherObj[0])
  }

  const deleteWeather = (id) => {
    setadd((prev)=> prev.filter((t) => t.id != id))
  }

  useEffect(() =>{
    const weather_data = JSON.parse(localStorage.getItem('weather'));

    if(weather_data && weather_data.length > 0){
      setadd(weather_data);
      console.log(weather_data[0])
    }
  },[])


  useEffect(() =>{  
    localStorage.setItem('weather', JSON.stringify(weatherObj));
  },[weatherObj]);


  return (
    <WeatherWrapper value={{ weatherObj, addWeather, deleteWeather }}>
      <div className='min-h-screen py-8 bg-black'>

        <Welcome />
        {weatherObj.map((weather) => (

          <div key={weather.id}>
            <WeatherList weather={weather} time={formattedTime} />
          </div>

        ))}
      </div>
    </WeatherWrapper>

  )
}


export default App

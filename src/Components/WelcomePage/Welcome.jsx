import React, { useEffect, useState, setState, useCallback } from 'react'
import Umbralla from "../../assets/Umbralla.png"
import WeatherList from '../WeatherList/WeatherList'
import FetchWeather from '../../Hooks/FetchWeather';
// import {useWeatherData} from "../../Context"
import {useWeatherData} from "../../Context"

import {WeatherWrapper} from "../../Context"

function Welcome() {

  const [place, setplace] = useState("");
  const[cityName, setname] = useState("");
  const[city, setn] = useState("");

  const {addWeather} = useWeatherData();

  const [weather, setWeather] = useState([]);

  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
    
  const formattedTime = `${hours}:${minutes}`;

  const data =  FetchWeather(cityName);

  const [placeholder , setplaceholder] = useState("Enter the City Name");


  const removeElement = () =>{
    setplace("");
  }


  const submit = (e)=>{

    e.preventDefault();
    const m = place;
    setn(m);
    setname(place)
    setplace("")   
    setplaceholder("Enter the City Name");
  }

  let arr = []


  React.useEffect(() => {
    if (data) {
      setWeather([data]);
      arr.push(data) // Store the data in an array
      addWeather(data)
      
    }
  }, [data]);



  return (

        <div className="search flex justify-center pt-4 pb-5  items-center">
            <div className="inputbox outline-none w-1/3 ml-16">
            <form onSubmit={submit} autoComplete='off'>
                <input type="text"
                placeholder={place == ""? placeholder : ""}
                className='p-2 w-full ml-2 rounded-lg bg-white outline-none text-xl font-sans ' 
                name='city'
                value={place}
                onChange={(e)=>setplace(e.target.value)}
                />
                </form>
            </div>
            <div className="cancelBtn">
                <button type='submit' className='text-white text-xl ml-5 hover:text-gray-100 transition-transform' onClick={removeElement}>Cancel</button>
            </div>
        </div> 
        
  )
}

export default Welcome
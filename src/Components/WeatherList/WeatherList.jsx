import React, { useEffect } from 'react'
import brokenclouds from "../../assets/brokenclouds.png";
import overcastclouds from "../../assets/overcastclouds.png";
import scatteredclouds from "../../assets/scatteredclouds.png";
import haze from "../../assets/haze.png";
import moderaterain from "../../assets/moderaterain.png";

import { useWeatherData } from "../../Context";
import { NavLink, Link } from 'react-router-dom';

function WeatherList({ weather, time }) {

    const { deleteWeather } = useWeatherData();


    const city = weather.name
    const temp = weather.main.temp
    const img = weather.weather[0].description
    const title = weather.weather[0].main;
    const speed = weather.wind.speed;
    const gust = weather.wind.gust || 0;
    const feels_like = weather.main.feels_like;
    const humidity = weather.main.humidity;
    const pressure = weather.main.pressure || 0;
    const temp_max = weather.main.temp_max;
    const temp_min = weather.main.temp_min;

    console.log()

    // console.group(speed)

    console.log("hi", city, temp, img)

    const src = img.replace(" ", "")

    const weatherImages = {
        brokenclouds,
        overcastclouds,
        scatteredclouds,
        haze,
        moderaterain,
    };



    const image = weatherImages[src] || haze;

    const send_data = {
        weatherId: weather.id,
        city: city,
        temp: temp,
        img: src,
        title: title,
        speed: speed,
        gust: gust,
        feels_like: feels_like,
        humidity: humidity,
        pressure: pressure,
        temp_max: temp_max,
        temp_min: temp_min,
    }

    const data = { weatherId: weather.id, extraData: send_data };

    localStorage.setItem('weatherData', JSON.stringify(send_data));



    return (
        <div className='container w-1/3'>
            {/* <div className="items text-white flex justify-center items-center mt-6"> */}

            <div className="box1 relative left-1/3 ml-96 hover:bg-slate-400 text-white bg-slate-500 rounded-xl py-2  px-6 mt-5 flex justify-between w-full items-center gap-7">
                <NavLink
                    to={`/weather`}
                    state={data}
                    className={`flex w-full gap-4 items-center justify-center`}
                >
                    <img src={image} alt="" className='w-24' />
                    <div className="data flex w-3/4 justify-between items-center">
                        <div className="data1 leading-6">
                            <h1>{city}</h1>
                            <p>{time}</p>
                        </div>
                        <div className="data2">
                            <p>Temp: {temp}°C</p>
                        </div>
                    </div>
                </NavLink>
                <button className='hover:bg-red-50 ' onClick={() => deleteWeather(weather.id)}>❌</button>

            </div>


        </div>
        // </div>
    )
}

export default WeatherList
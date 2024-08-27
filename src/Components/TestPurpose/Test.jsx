import React from 'react'
import { useLocation, useParams } from 'react-router-dom'
import goa from "../../assets/goa.png";

//background image

import Haze from "../../assets/Background/Haze.jpg";
import brokenclouds from "../../assets/Background/brokenclouds.png";
import overcastclouds from "../../assets/Background/overcastclouds.jpg";
import scatteredclouds from "../../assets/Background/scatteredclouds.jpg";
import moderaterain from "../../assets/Background/moderaterain.png";

// icons

import Haze1 from "../../assets/Icons/Haze1.png";
import overcastclouds1 from "../../assets/Icons/overcastclouds1.png";
import scatteredclouds1 from "../../assets/Icons/scatteredclouds1.png";
import moderaterain1 from "../../assets/Icons/moderaterain1.png";


import feels from "../../assets/Icons/feels.png"
import humidity from "../../assets/Icons/humidity.png"
import pressure from "../../assets/Icons/pressure.png"
import gust from "../../assets/Icons/gust.png"
import fulll from "../../assets/Icons/fulll.png"
import min from "../../assets/Icons/min.png"

function Test() {
  // const {id} = useParams();
  // const loaction = useLocation();

  // const query = new URLSearchParams(location.search);
  // const data = query.get("extradata");

  // console.log("The id is: ",data)

  // state

  const location = useLocation();
  let { weatherId, extraData } = location.state || {};

  
  if(!extraData){
    extraData = JSON.parse(localStorage.getItem('weatherData'));
  }

  console.log("the weather data: ", extraData.img)

  // console.log("the weather data : ", weatherd)

  const celsus = Math.floor(extraData.temp);



  const date = new Date();
  const day = date.toLocaleDateString("us-en", { weekday: "long" })
  const month = date.toLocaleDateString("us-en", { month: "long" })


  const weatherImages = {
    brokenclouds,
    overcastclouds,
    scatteredclouds,
    Haze,
    moderaterain,
  };

  const icons = {
    Haze1,
    overcastclouds1,
    scatteredclouds1,
    moderaterain1,
  }

  const images = weatherImages[extraData.img] || Haze;

  const add_one = extraData.img + "1";

  const add_icons = icons[add_one] || Haze1;

  console.log(add_one)

  return (
    <div className="h-screen ">

      <div className="img  h-2/3 w-full shadow-lg relative">

        <img src={images} className='h-full w-full object-cover shadow-md opacity-90' alt="" />
        <div className="absolute inset-0 bg-black opacity-40"></div>

        <div className="data text-white absolute w-full top-4 text-5xl font-sans mt-5">
          <h1 className='w-full justify-center flex text-2xl font-sans leading-4 font-normal'>{day}, {month}</h1>

          <div className="box absolute top-32 left-36 flex gap-1 items-center">
            <h1 className=' text-7xl font-light'>{celsus}°</h1>
            <img style={{ width: "60px", height: "60px" }} className='mt-2' src={add_icons} alt="" />
          </div>

          <div className="box absolute top-48 left-36">
            <h1 className='text-2xl font-sans font-light ml-1 pt-4'>{extraData.title} / {Math.floor(extraData.speed)}mps</h1>
          </div>


          <div className="heading absolute flex w-full justify-center inset-0">
            {/* <span>hi</span> */}
            <h1 className='font-semibold text-6xl mt-7'>{extraData.city}</h1>
          </div>

        </div>

      </div>
      {/* <img src={goa} className='h-4/5 w-full opacity-95 object-cover relative shadow-md' alt="" srcset="" /> */}

      <div className="container flex gap-5 w-screen ml-20 justify-center">
        <div className="box hover:shadow-2xl w-52 h-64">
          <div className="head w-full pt-7 flex flex-col justify-center items-center gap-4">
            <h1 className='text-black text-3xl font-bold flex justify-center'>Feels Like</h1>
            <img src={feels} style={{width:"70px"}} className='ml-3' alt="" />
            <h1 className='text-black text-5xl font-bold ml-3'>{Math.floor(extraData.feels_like)}°</h1>
          </div>
        </div>
        <div className="box hover:shadow-2xl w-52 h-64">
        <div className="head w-full pt-7 flex flex-col justify-center items-center gap-4">
            <h1 className='text-black text-3xl font-bold flex justify-center'>Humidity</h1>
            <img src={humidity} style={{width:"70px"}} className='' alt="" />
            <h1 className='text-black text-5xl font-bold ml-1'>{extraData.humidity}</h1>
          </div>
        </div>
        <div className="box hover:shadow-2xl w-52 h-64">
        <div className="head w-full pt-7 flex flex-col justify-center items-center gap-4">
            <h1 className='text-black text-3xl font-bold flex justify-center'>Pressure</h1>
            <img src={pressure} style={{width:"70px"}} className='ml-3' alt="" />
            <h1 className='text-black text-5xl font-bold ml-3'>{extraData.pressure}</h1>
          </div>
        </div>
        <div className="box hover:shadow-2xl w-52 h-64">
        <div className="head w-full pt-7 flex flex-col justify-center items-center gap-4">
            <h1 className='text-black text-3xl font-bold flex justify-center'>Gust</h1>
            <img src={gust} style={{width:"70px"}} className='ml-3' alt="" />
            <h1 className='text-black text-5xl font-bold ml-3'>{Math.floor(extraData.gust)}</h1>
          </div>
        </div>
        <div className="box hover:shadow-2xl w-52 h-64">
        <div className="head w-full pt-7 flex flex-col justify-center items-center gap-4">
            <h1 className='text-black text-3xl font-bold flex justify-center'>Max Temp</h1>
            <img src={fulll} style={{width:"70px"}} className='ml-3' alt="" />
            <h1 className='text-black text-5xl font-bold ml-3'>{Math.floor(extraData.temp_max)}°</h1>
          </div>
        </div>
        <div className="box hover:shadow-2xl w-52 h-64">
        <div className="head w-full pt-7 flex flex-col justify-center items-center gap-4">
            <h1 className='text-black text-3xl font-bold flex justify-center'>Min Temp</h1>
            <img src={min} style={{width:"70px"}} className='ml-3' alt="" />
            <h1 className='text-black text-5xl font-bold ml-3'>{Math.floor(extraData.temp_min)}°</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Test
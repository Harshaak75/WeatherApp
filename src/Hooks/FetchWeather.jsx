import React, { useEffect, useState } from 'react'

function FetchWeather(cityName) {
  const [loading, setLoading] = useState(false);
  const [data, setdata] = useState();

  // change this later
  let a;

  const api = "be0ea197818aa49864908df64ad7c955";
  // const api = "your_api_key"; // replace with your actual API key

  useEffect(() =>{
    if (!cityName) return; 

    const fetchData = async () => {

      setLoading(true); 
      try {
        console.log("api",api)
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${cityName},in&units=metric&appid=${api}`
        );

        const result = await response.json();
        console.log(result.weather[0].id);
        // console.log(result);
        setdata(result);

      } catch (err) {
      }finally{
        setLoading(false);
      }
    };

    fetchData();
},[cityName])

  return data;
}

export default FetchWeather
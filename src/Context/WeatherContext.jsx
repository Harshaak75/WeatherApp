import { createContext, useContext } from "react";

export const weatherContext = createContext({
    weatherObj:[{
        data:"",
    }],
    addWeather:(data)=>{},
    deleteWeather:(id)=>{},
})

export const WeatherWrapper = weatherContext.Provider;

export function useWeatherData(){
    return useContext(weatherContext);
} 



import {useEffect, useState} from "react"
import WeatherForm from "./weatherForm"
import WeatherMainInfo from "./weatherMainInfo";
import style from "./weatherApp.module.css"
import Loading from "./loading";

export default function WeatherApp(){
    const [weather, setWeather] = useState(null);
    // console.log(style)

    useEffect(()=>{
        loadInfo()
    },[])

    useEffect(() =>{
        document.title= `Weather | ${weather?.location.name ?? ""}`

    },[weather])

   async function loadInfo(city ="london"){
        try {
            const request = await fetch(`http://api.weatherapi.com/v1/current.json?aqi=no&key=c4b26501f01641058b4160912230106&q=${city}`)
        const json = await request.json()
        setWeather(json)
        console.log(json)
            } catch (error) {
            
        }

    }   
    
    function handleChangeCity(city){
        setWeather(null);
        loadInfo(city)
    }
    
    return (
    <div className={style.weatherContainer}>
       <WeatherForm onChangeCity={handleChangeCity} />
        { weather ? <WeatherMainInfo weather={weather}/> : <Loading/>}
    </div>
    )
}
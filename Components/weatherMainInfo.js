import style from "./weatherMainInfo.module.css"


export default function WeatherMainInfo ({weather}) {
    return <div className={style.mainInfo} >
        <div className={style.city} >{weather?.location.name}</div>
        <div className={style.contrie} >{weather?.location.country}</div>
        <div className={style.row} >
            <div>
                <img 
                src={`http:${weather?.current.condition.icon}`}
                 with="128" 
                 alt={weather?.current.condition.text} 
                 />
            </div>
            <div  className={style.weatherConditions}  >
                <div className={style.condition} >{weather?.current.condition.text}</div>
                <div className={style.current} >{weather?.current.temp_c }</div>
            </div>
        </div>
        <iframe 
        title="mapa"
        src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d424418.64626022504!2d${weather?.location.lon}57!3d${weather?.location.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sar!4v1685657853136!5m2!1ses!2sar`} 
        width="100%" 
        height="450" 
        style={{border:0}}
        allowfullscreen=""
         loading="lazy" 
         referrerpolicy="no-referrer-when-downgrade">

         </iframe>
    </div>
}
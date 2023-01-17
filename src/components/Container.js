import React, {useState}  from 'react'
import Footer from './Footer'
import axios from 'axios'
import WeatherSearch from './WeatherSearch'
import WeatherData from './WeatherData'
import Content from "./Content"
import "../styles/main.css"

const Container = () => {
  const [weather,setWeather]=useState();

 const api_call= async(e)=>{
  e.preventDefault()

  const apiKey="f5ceab07c3b9038351e5a55b06eb914d";
  const url=`https://api.openweathermap.org/data/2.5/weather?q=Istanbul&appid=${apiKey}&units=metric`;
  const request=axios.get(url);
  const response= await request;
  setWeather(response.data.main);
  console.log(response.data.main)
 } 
  weather && console.log(weather) ;
   
  return (
    <div className="container">
        <div className="main">
            
            <Content>
               <WeatherSearch api_call={api_call}/>
               {weather && <WeatherData weather={weather}/>}
              {/* Weather true ise yani api_call dan veri istendi ise WeatherData componentini göster */}
            </Content>
            
            <Footer/>
        </div>
    </div>
  )
}

export default Container
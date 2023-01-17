import React from 'react'
import "../styles/main.css"

const WeatherData = ({weather}) => {
  // const weather=props.weather; 
  const {temp,humidity,pressure}=weather;
  console.log(weather);
  return (
    <div className='container'>
    <div className='box row'>
     <h2 className='city'>İstanbul için hava tahmini</h2>
        <div className='temp col-lg-6 col-md-8 col-sm-12'>                
            <div className='icon'>
                <h2 className='today'>Pazar</h2>
                <p>icon gelecek</p>
            </div>
            <div className='forecast ml-5'>
              <span className='d-flex'>
                <p className=''>SICAKLIK</p>
                <p className=''>{temp}</p>
              </span>
              <span className='d-flex'>
                <p className=''>NEM</p>
                <p className=''>{humidity}</p>
              </span>
              <span className='d-flex'>
                <p className=''>BASINÇ</p>
                <p className=''>{pressure}</p>
              </span>
            </div>  
        </div>
    </div>
</div>
  )
}

export default WeatherData
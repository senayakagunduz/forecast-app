import React from 'react'
import { Card} from 'react-bootstrap';
import "./WeatherData.scss"

const WeatherData = ({forecast, day}) => {
    const {main,weather}=forecast;
    const icon=weather[0].icon;

    const iconUrl=`https://openweathermap.org/img/wn/${icon}@2x.png`
  return (
      <Card className='text-center mt-3 pt-4 h-100 w-100 weather-data-card'>
        <h6>{day}</h6>
        <Card.Img variant='top' src={iconUrl}/>
        <Card.Title className='title'>{weather[0].description}</Card.Title>
        <Card.Title className='title'>{main.temp_min}°/{main.temp_max}°</Card.Title> 
    </Card>
  )
}

export default WeatherData
import React from 'react'
import { Card, Container} from 'react-bootstrap';
import { TbTemperatureMinus, TbTemperaturePlus } from 'react-icons/tb';
import { WiHumidity } from 'react-icons/wi';
import { FaWind } from 'react-icons/fa';

const WeatherData = ({forecast, day}) => {
    const {main,weather}=forecast;
    const icon=weather[0].icon;

    const iconUrl=`https://openweathermap.org/img/wn/${icon}@2x.png`
  return (
    <Container>
      <Card className='text-center mt-3 pt-4 '>
        <h6>{day}</h6>
        <Card.Title>{weather[0].main}</Card.Title>
        <Card.Subtitle>{main.temp}°</Card.Subtitle>
      <Card.Img variant='top' src={iconUrl}/>
      <Card.Body className='mt-0 text-left'>
        <Card.Title><TbTemperaturePlus className='ml-2'/>{main.feels_like}°</Card.Title>
        <Card.Title><WiHumidity className='ml-2'/>{main.humidity}%</Card.Title>
        <Card.Title><FaWind className='ml-2'/>{main.wind}km/h</Card.Title>
      </Card.Body>
    </Card>
    </Container>
  )
}

export default WeatherData
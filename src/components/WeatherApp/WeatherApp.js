import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import WeatherSearch from "../WeatherSearch/WeatherSearch";
import WeatherDatas from "../WeatherDatas/WeatherDatas";
import axios from "axios";
import moment from "moment";
import "./weatherApp.scss"

//const response=await axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric&lang=tr`);
const WeatherApp = () => {
  const [data, setData] = useState([]);
  const [todayData,setTodayData]=useState();
  const [city, setCity] = useState("");

 const moment=require("moment");
  const getHour = () => {
    const hour = moment().format("h:mm a");
    return hour;
  };
  
  const getWeekDay=()=>{
    const weekDay = moment().format("ddd");
    const date=moment().format("MMM D");
    const formattedWeekDay=`${weekDay},${date}`
    return formattedWeekDay;
  }

  const weekDays = [];
  for (let i = 1; i < 7; i++) {
    const day = moment().add(i, "days");
    const weekDay = day.format("ddd"); //haftanın günü
    const date = day.format("MMM D"); //tarih(Yıl dahil değil)
    const formattedDay = `${weekDay},${date}`;
    weekDays.push(formattedDay);
  }

  console.log(weekDays);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const apiKey = "aef00181dee1ab9c2ca43739994a52f0";
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric&lang=en`
      );
      const weekData=response.data.list.slice(1, 7);
      const oneDayData=response.data.list.slice(0,1);
      setData(weekData);
      setTodayData(oneDayData);
      
    } catch (error) {
      console.log(error);
    }
  };
  console.log("data",data);
  console.log("today data",todayData);

  return (
    <Container className="mt-5 container">
      <Row>
        <Col>
          <WeatherSearch 
          city={city} 
          setCity={setCity} 
          getData={getData} />

          <WeatherDatas
            data={data}
            setData={setData}
            todayData={todayData}
            weekDays={weekDays}
            getHour={getHour}
            getWeekDay={getWeekDay}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default WeatherApp;

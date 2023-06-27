import React from "react";
import WeatherData from "../WeatherData/WeatherData";
import { Container, Col, Row, Card } from "react-bootstrap";
import { BsArrowDown, BsArrowUp } from "react-icons/bs";
import { TbTemperaturePlus } from "react-icons/tb";
import { WiHumidity } from "react-icons/wi";
import { FaWind } from "react-icons/fa";
import "./WeatherDatas.scss";

const WeatherDatas = ({ weekDays, data, todayData, getHour, getWeekDay }) => {
  console.log("todayData", todayData);
  const icon = todayData && todayData[0]?.weather[0]?.icon;
  //  console.log("icon",icon)
  const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;
  return (
    <Container className="mt-5">
      <Card className="pt-4 pb-4 weather-datas-card ">
        <Row
          xs={1}
          md={2}
          lg={6}
          className="d-flex justify-content-around align-center"
        >
          <Col className="text-center">
            <div className="fs-3">{getHour()}</div>
            <div className="fs-3">{getWeekDay()}</div>
            <div className="display-3">
              {todayData && todayData[0].main.temp}°
            </div>
            <div className="fs-3 d-flex">
              {
                todayData && (
                  <>
                    <img src={iconUrl} />
                    {todayData[0].weather[0].description}
                  </>
                )
              }
            </div>
          </Col>

          <Col className="text-center mt-4">
            <div className="fs-4">
              <BsArrowDown />
              {todayData && todayData[0].main.temp_min}°/
              {todayData && todayData[0].main.temp_max}°
              <BsArrowUp />
            </div>
            <div className="fs-4">
              <TbTemperaturePlus className="ml-2" /> feels_like
              {todayData && todayData[0].main.feels_like}
            </div>
            <div className="fs-4 ">
              {" "}
              <WiHumidity className="ml-4" /> humidity{" "}
              {todayData && todayData[0].main.humidity}%
            </div>
            <div className="fs-4">
              <FaWind className="ml-2" /> wind{" "}
              {todayData && todayData[0].wind.speed}km/h
            </div>
          </Col>
        </Row>
      </Card>

      <Row lg={6} md={3} sm={2}>
        {data.map((forecast, index) => (
          <Col key={index} className="mb-3">
            <WeatherData
              key={index}
              forecast={forecast}
              day={weekDays[index]}
            />
          </Col>
        ))}
      </Row>
      <p className="text-center mt-5 text-light fs-4">Developed By Senay Akagunduz</p>
    </Container>
  );
};

export default WeatherDatas;

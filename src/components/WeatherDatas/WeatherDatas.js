import React from "react";
import WeatherData from "../WeatherData/WeatherData";
import { Container, Col, Row } from "react-bootstrap";
import { BsArrowDown, BsArrowUp } from "react-icons/bs";

const WeatherDatas = ({ weekDays, data, todayData, getHour, getWeekDay }) => {
  return (
    <Container className="mt-3">
      <Row>
        <Col className="text-center">
          <div className="fs-3 mb-0" >{getHour()}</div>
          <div className="fs-3 pt-0">{getWeekDay()}</div>
          <div>
            <span className="fs-3"><BsArrowDown/> {todayData != undefined ? todayData[0].main.temp_min : ""}° &nbsp;&nbsp;</span>
            <span className="display-1"> {todayData != undefined ? todayData[0].main.temp : ""}°</span>
            <span className="fs-3"> &nbsp;{todayData != undefined ? todayData[0].main.temp_max : ""}°<BsArrowUp/></span>
          </div>
          <div>{todayData != undefined ? todayData[0].weather[0].description : ""}</div>
        </Col>
      </Row>
      <Row>
        {data.map((forecast, index) => (
          <Col key={index}>
            <WeatherData
              key={index}
              forecast={forecast}
              day={weekDays[index]}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default WeatherDatas;

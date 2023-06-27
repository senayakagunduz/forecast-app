import React from "react";
import { Form } from "react-bootstrap";
import {BiSearchAlt} from "react-icons/bi"
import "./WeatherSearch.scss"


const WeatherSearch = ({ city, setCity, getData, setShowWeatherDatas }) => {
  const handleChange = (e) => {
    setCity(e.target.value);
  };
  const handleSubmit=(e)=>{
    e.preventDefault();
    getData();
    setShowWeatherDatas(true);
  }
  return (
    <Form onSubmit={handleSubmit} className="parent-form">
      <Form.Group className="form-group">
        <BiSearchAlt className="search-icon"/>
        <Form.Control
          type="text"
          placeholder="Search for city..."
          name="city"
          value={city}
          onChange={handleChange}
          style={{borderRadius:'20px'}}
          className="search-input"
        />
      </Form.Group>
    </Form>
  );
};

export default WeatherSearch;

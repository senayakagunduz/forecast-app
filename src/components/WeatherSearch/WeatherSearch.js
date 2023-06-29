import React from "react";
import { Form } from "react-bootstrap";
import "./WeatherSearch.scss"
import { AiFillGithub } from "react-icons/ai";


const WeatherSearch = ({ city, setCity, getData, setShowWeatherDatas }) => {
  const githubLink = `https://github.com/senayakagunduz/forecast-app`;
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
      
      <Form.Group className="form-group d-flex align-items-center">
        <Form.Control
          type="text"
          placeholder="Search for city..."
          name="city"
          value={city}
          onChange={handleChange}
          style={{borderRadius:'20px',textTransform: 'capitalize'}}
          className="search-input"
        />
        <a href={githubLink}>
        <AiFillGithub className="fs-1 text-light ml-3 p-1"/>
        </a>
      </Form.Group>
    </Form>
  );
};

export default WeatherSearch;

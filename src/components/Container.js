import React, { useState } from "react";
import Footer from "./Footer";
import axios from "axios";
import WeatherSearch from "./WeatherSearch";
import Content from "./Content";
import Context from "../context/Context";
import "../styles/main.css";
import cityData from "../data/cityData";

const Container = () => {
  const [list, setlist] = useState([]);
  
  const api_call = async (e,selectedCity) => {
    e.preventDefault();
   
    const selectedCityObj = cityData.filter(item=>item.name === selectedCity);
    const latitude = selectedCityObj[0].latitude;
    const longitude = selectedCityObj[0].longitude;
    const apiKey = "f5ceab07c3b9038351e5a55b06eb914d";
    
    const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    const request = axios.get(url);
    const response = await request;
   
    const arr = response.data.list;
   
    setlist([]);

    for (let i = 0; i <= 6; i++) {
      let obj = {};
      obj.temp = arr[i].main.temp;
      obj.humidity = arr[i].main.humidity;
      obj.desc = arr[i].weather[0].description;
    
      setlist(list => [...list, obj]);
    }
    console.log("allList",list);
    console.log("selecetedCity",selectedCity)
  };
  return (
    <div className="container">
      <div className="main">
      <Content>
          <Context.Provider value={{ api_call, list }}>
            <WeatherSearch />
            {/* api_call={api_call} bunu da WeatherSearch den aldım*/}
            {/* {weather && <WeatherData />} */}
            <Footer />
            {/*{list && <Footer/>} */}
            {/* <Footer/> */}
            {/* weather={weather}  bunu yukarıdan sildim çünkü artık Context.Provider var*/}
            {/* Weather true ise yani api_call dan veri istendi ise WeatherData componentini göster */}  
          </Context.Provider>
      </Content>
      </div>
    </div>
  );
};

export default Container;

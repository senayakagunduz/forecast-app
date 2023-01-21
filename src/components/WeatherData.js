import React from "react";
import "../styles/main.css";

const WeatherData = ({day,index}) => {
  // let objToday=new Date();
  // const weekday=new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday');
  // const dayOfWeek = weekday[objToday.getDay()];
  //() içerisine props yazmıyıruz artık
  // const weather=props.weather;

  console.log("DAAAAAAY",day);  
      return ( 
      <div className="day" key={index}>
        <p>Temp:<span className="data"> {day.temp}º</span></p>
        <p>Humidity:<span className="data"> {day.humidity}</span></p>
        <p>Desc: <span className="data">{day.desc}</span></p>
      </div>
      )
};

export default WeatherData;

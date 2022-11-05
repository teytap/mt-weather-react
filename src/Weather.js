import React from "react";
import axios from "axios";
import { Puff } from "react-loader-spinner";
export default function Weather(props) {
  function newCityTemp(response) {
    alert(
      `${response.data.name} is currently${Math.round(
        response.data.main.temp
      )}°C`
    );
  }
  let apiKey = "1223d92fc1f5a88dccf0859beb3b3425";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(newCityTemp);
  return (
    <Puff
      height="80"
      width="80"
      radisu={1}
      color="white
      "
      ariaLabel="puff-loading"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
    />
  );
}

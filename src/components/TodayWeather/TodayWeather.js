import React, { useEffect, useState } from "react";
import axios from "axios";

import {
  WeatherContainer,
  Temperature,
  Rainfall,
  InfoContainer,
  Icon,
} from "./style";

import sunIcon from "../../assets/Icon/sunnyIcon.png";
import rainIcon from "../../assets/Icon/rainIcon.png";
import snowIcon from "../../assets/Icon/snowIcon.png";

const TodayWeather = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("http://192.168.0.100:8080/api/weather")
      .then((response) => {
        setData(response.data);
        console.log("Response data:", response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError(error);
      });
  }, []);

  const getWeatherIcon = (precipitationType) => {
    if (precipitationType === "비" || precipitationType === "rain") {
      return rainIcon;
    } else if (precipitationType === "눈" || precipitationType === "snow") {
      return snowIcon;
    } else {
      return sunIcon;
    }
  };

  if (!data) {
    return (
      <WeatherContainer $background="sun">
        <InfoContainer>
          <Icon src={sunIcon} alt="Weather Icon" />
          <Temperature>Loading...</Temperature>
          <Rainfall>Loading...</Rainfall>
        </InfoContainer>
      </WeatherContainer>
    );
  }

  return (
    <>
      <WeatherContainer $background={data ? data.PrecipitationType : "sun"}>
        <InfoContainer>
          <Icon
            src={getWeatherIcon(data ? data.PrecipitationType : "sun")}
            alt="Weather Icon"
          />
          <Temperature>{data.Temperature}</Temperature>
          <Rainfall>{data["1HourRainfall"]}</Rainfall>
        </InfoContainer>
      </WeatherContainer>
    </>
  );
};

export default TodayWeather;

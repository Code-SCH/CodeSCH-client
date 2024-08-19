import styled from "styled-components";

import sun from "../../assets/Weather/sun.png";
import rain from "../../assets/Weather/rain.png";
import snow from "../../assets/Weather/snow.png";

export const WeatherContainer = styled.div`
  padding-top: 15vh;
  width: 100%;
  height: 8vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: ${({ $background }) => {
    if ($background === "rain") {
      return `url(${rain})`;
    } else if ($background === "snow") {
      return `url(${snow})`;
    } else {
      return `url(${sun})`;
    }
  }};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const City = styled.div`
  font-size: 26px;
  font-weight: bold;
  color: white;
`;

export const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Temperature = styled.div`
  font-size: 36px;
  font-weight: bold;
  color: white;
  margin-right: 20px;
`;

export const Icon = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 10px;
`;

export const Rainfall = styled.div`
  font-size: 16px;
  font-weight: normal;
  color: white;
`;

export const Humidity = styled.div`
  margin-top: 5px;
  font-size: 16px;
  font-weight: bold;
  color: white;
`;

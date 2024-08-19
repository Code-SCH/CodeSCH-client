import styled from "styled-components";

export const CardContainer = styled.div`
  background: #ffffff;
  box-shadow: 0px 0px 3px 3px rgba(191, 191, 191, 0.25);
  border-radius: 10px;
  height: 210px;
  width: 42vw;
  margin: 2vh auto;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FoodInfo = styled.div`
  padding: 10px;
  width: 100%;
  font-size: 12px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  box-sizing: border-box;

  & > * {
    padding-bottom: 10px;
    margin: 0;
  }
`;

export const Counting = styled.p`
  @font-face {
    font-family: "yg-jalnan";
    src: url("https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_four@1.2/JalnanOTF00.woff")
      format("woff");
    font-weight: normal;
    font-style: normal;
  }

  width: 100%;
  text-align: center;
  font-weight: bold;
  font-size: 20px;
  color: #26539c;
  font-family: "yg-jalnan", sans-serif;
`;

export const FoodImage = styled.img`
  width: 25vw;
  height: 50%;
  object-fit: contain;
  display: block;
  margin-top: 10px;
`;

import styled from "styled-components";

export const MainContainer = styled.div`
  background-color: #f8f8f8;
`;

export const FoodList = styled.div`
  padding-top: 15vh;
  margin-top: 1vh;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  justify-content: center;
`;

export const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 15vh;
  background: #ffffff;
  box-shadow: 0px 5.10638px 12.766px 5.10638px rgba(191, 191, 191, 0.25);
  z-index: 1000;
  display: flex;
  justify-content: center;
  text-align: center;
  flex-direction: column;
  align-items: center;

  span {
    margin: 3vh 0 0 0;
    position: relative;
    display: inline-flex; 
    align-items: center; 
    padding: 0 20px;
    font-size: 20px;
    font-weight: bold;
  }

  p {
    font-size: 12px;
  }

  span::before,
  span::after {
    content: "";
    width: 10px;
    height: 10px;
    background-color: #26539c;
    border-radius: 50%; 
    display: inline-block;
  }

  span::before {
    margin-right: 20px;
    margin-bo
  }

  span::after {
    margin-left: 20px;
  }
`;

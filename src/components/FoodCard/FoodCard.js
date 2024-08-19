import React from "react";
import { CardContainer, FoodInfo, FoodImage, Counting } from "./style";

const FoodCard = ({ name, location, remaining, image }) => {
  return (
    <CardContainer>
      <FoodImage src={image} alt={name} />
      <FoodInfo>
        <h3>{name}</h3>
        <p>{location}</p>
        <Counting>{remaining}</Counting>
      </FoodInfo>
    </CardContainer>
  );
};

export default FoodCard;

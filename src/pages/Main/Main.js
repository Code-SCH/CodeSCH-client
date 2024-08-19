import React, { useEffect, useState } from "react";
import axios from "axios";
import FoodCard from "../../components/FoodCard/FoodCard";
import Food1 from "../../assets/food1.png";
import Food2 from "../../assets/food2.png";
import Food3 from "../../assets/food3.png";
import Food4 from "../../assets/food4.png";
import Food5 from "../../assets/food5.png";
import { MainContainer, FoodList, Header } from "./style";

const Main = () => {
  const [foodCounts, setFoodCounts] = useState({
    Menu1: 0,
    Menu2: 0,
    Menu3: 0,
    Menu4: 0,
    Menu5: 0,
  });

  const foodData = [
    {
      id: 1,
      name: "밥 + 반찬 4가지",
      location: "향설 1관 식당",
      menu: "Menu1",
      maxCount: 100,
      image: Food1,
    },
    {
      id: 2,
      name: "뼈해장국",
      location: "향설 2관 푸드코너",
      menu: "Menu2",
      maxCount: 50,
      image: Food2,
    },
    {
      id: 3,
      name: "치킨 치즈 가스",
      location: "학생회관 푸드코너",
      menu: "Menu3",
      maxCount: 50,
      image: Food3,
    },
    {
      id: 4,
      name: "설렁탕",
      location: "향설 2관 푸드코너",
      menu: "Menu4",
      maxCount: 50,
      image: Food4,
    },
    {
      id: 5,
      name: "소고기 쌀국수",
      location: "학생회관 푸드코너",
      menu: "Menu5",
      maxCount: 50,
      image: Food5,
    },
  ];

  useEffect(() => {
    const fetchCounts = async () => {
      try {
        const responses = await Promise.all(
          foodData.map((food) =>
            axios.get(
              `http://192.168.0.106:8080/api/menu/count?menuName=${encodeURIComponent(
                food.menu
              )}`,
              {
                headers: {
                  "Content-Type": "application/json",
                },
              }
            )
          )
        );

        setFoodCounts({
          Menu1: responses[0].data,
          Menu2: responses[1].data,
          Menu3: responses[2].data,
          Menu4: responses[3].data,
          Menu5: responses[4].data,
        });
      } catch (error) {
        console.error("Error fetching food counts", error);
      }
    };

    fetchCounts();
  }, []);

  return (
    <MainContainer>
      <Header>
        <span>순천향대학교</span>
        <p>천원의 아침밥 남은 인원수를 확인하세요.</p>
      </Header>
      <FoodList>
        {foodData.map((food) => (
          <FoodCard
            key={food.id}
            name={food.name}
            location={food.location}
            remaining={`${foodCounts[food.menu]}/${food.maxCount}`}
            image={food.image}
          />
        ))}
      </FoodList>
    </MainContainer>
  );
};

export default Main;

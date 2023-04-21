import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../../components/header/Header";
import Card from "../../components/header/Card";
import { useSelector, useDispatch } from "react-redux";
import { setCardInfos } from "../../redux/cardInfosSlice";

import CardArea, {
  HomeImg,
  ImgContainer,
  LoadingDiv,
  Section,
} from "./Home.styled";
import loading from "../../assets/loading.svg";
import { AboutTitle } from "../about/About.styled";
import homeSvg from "../../assets//home.svg";

const Home = () => {
  const mealTypes = ["Breakfast", "Lunch", "Dinner", "Snack", "Teatime"];
  const [query, setQuery] = useState("");
  const [meal, setMeal] = useState(mealTypes[0]);
  const [gif, setGif] = useState(false);
  const cardInfos = useSelector((state) => state.cardInfos.value);
  const dispatch = useDispatch();
  const url = `https://api.edamam.com/search?q=${query}&app_id=${process.env.REACT_APP_API_ID}&app_key=${process.env.REACT_APP_API_KEY}&mealType=${meal}`;
  const [searchPerformed, setSearchPerformed] = useState(false);
  const getRecipes = () => {
    if (query) {
      setGif(true);
      axios
        .get(url)
        .then((data) => {
          dispatch(setCardInfos(data.data.hits));
          setGif(false);
        })
        .catch((e) => console.log(e));
    } else {
      alert("Please Enter your meal");
    }
  };

  useEffect(() => {
    const storedCardInfos = localStorage.getItem("cardInfos");
    if (storedCardInfos) {
      setCardInfos(JSON.parse(storedCardInfos));
    }
  }, []);

  const handleSearch = () => {
    setSearchPerformed(true);
    getRecipes();
  };

  return (
    <Section>
      <Header
        query={query}
        mealTypes={mealTypes}
        setQuery={setQuery}
        setMeal={setMeal}
        getRecipes={handleSearch}
        setGif={setGif}
      ></Header>
      {!gif ? (
        <CardArea>
          {!cardInfos.length && !searchPerformed && (
            <ImgContainer>
              <HomeImg src={homeSvg} />
            </ImgContainer>
          )}

          {cardInfos.length === 0 && searchPerformed && (
            <AboutTitle> The Food can not be found</AboutTitle>
          )}

          {cardInfos.length > 0 &&
            cardInfos.map((liste) => (
              <Card key={liste.recipe.calories} recipe={liste.recipe}></Card>
            ))}
        </CardArea>
      ) : (
        <LoadingDiv>
          <img src={loading} alt="loading" />
        </LoadingDiv>
      )}
    </Section>
  );
};

export default Home;
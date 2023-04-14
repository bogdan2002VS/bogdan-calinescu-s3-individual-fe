import React, { useState } from "react";
import axios from "axios";
import Header from "../../components/header/Header";
import Card from "../../components/header/Card";
import CardArea, {
  HomeImg,
  ImgContainer,
  LoadingDiv,
  Section,
} from "./Home.styled";
// import NotFound from "../notfound/NotFound";
import loading from "../../assets/loading.svg";
import { AboutTitle } from "../about/About.styled";
import homeSvg from "../../assets//home.svg";
const Home = () => {
  const mealTypes = ["Breakfast", "Lunch", "Dinner", "Snack", "Teatime"];
  const [query, setQuery] = useState(
    ""
  );
  const [meal, setMeal] = useState(

    mealTypes[0]
  );
  const [cardInfos, setCardInfos] = useState(null);
  const [gif, setGif] = useState(false);

  // ! API URL --------------------

  const url = `https://api.edamam.com/search?q=${query}&app_id=${process.env.REACT_APP_API_ID}&app_key=${process.env.REACT_APP_API_KEY}&mealType=${meal}`;

  // let info = "Start Searching";
  const getRecipes = () => {
    if (query) {
          setGif(true)
          axios.get(url)
          .then((data)=>{
            setCardInfos(data.data.hits);
            setGif(false)
            console.log(data.data.hits);
          })
          .catch(e => console.log(e))
    } else {
      alert("Please Enter your meal");
    }
  };

  return (
    <Section>
      <Header
        query={query}
        mealTypes={mealTypes}
        setQuery={setQuery}
        setMeal={setMeal}
        getRecipes={getRecipes}
        setGif={setGif}
      ></Header>
      {!gif ? (
        <CardArea>
          {!cardInfos && (
            <ImgContainer>
              <HomeImg src={homeSvg} />
            </ImgContainer>
          )}

          {cardInfos?.length === 0 && (
            <AboutTitle>The Food can not be found</AboutTitle>
          )}

          {cardInfos?.length > 0 &&
            cardInfos.map((liste) => (
              <Card key={liste.recipe.calories} recipe={liste.recipe}>
                {" "}
              </Card>
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
// };

export default Home;

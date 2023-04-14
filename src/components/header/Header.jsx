import {
  ButtonStyle,
  FormContainer,
  H1,
  Input,
  Main,
  Select,
} from "./Header.styled";

const Header = ({
  mealTypes,
  setQuery,
  setMeal,
  getRecipes,
  query,
  setGif,
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    getRecipes();
    setQuery("");
  };

  return (
    <Main>
      <H1>Food App</H1>
      <FormContainer onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        ></Input>
        <ButtonStyle type="submit" value="Submit">
          Search
        </ButtonStyle>
        <Select
          name="mealTypes"
          id="mealTypes"
          onChange={(e) => setMeal(e.target.value)}
        >
          {mealTypes.map((meal, index) => {
            return (
              <option key={index} value={meal}>
                {meal}
              </option>
            );
          })}
        </Select>
      </FormContainer>
    </Main>
  );
};

export default Header;

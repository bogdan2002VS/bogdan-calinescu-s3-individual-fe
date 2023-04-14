import vincent from "../../assets/vincent.gif";
import { ButtonStyleCard } from "../../components/header/Card.styled";
import SectionStyled, { DivStyled } from "./NotFound.styled";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <SectionStyled>
      <DivStyled>
        <img src={vincent} alt="" />
        <h1>404</h1>
        <p>Ooppss... Something went wrong</p>
        <ButtonStyleCard
          onClick={() => navigate(`/home`)}
          style={{ width: "fit-content", height: "3rem" }}
        >
          GO TO HOMEPAGE{" "}
        </ButtonStyleCard>
      </DivStyled>
    </SectionStyled>
  );
};

export default NotFound;

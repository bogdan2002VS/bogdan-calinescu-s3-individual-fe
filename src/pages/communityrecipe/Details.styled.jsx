import styled, { css, keyframes } from "styled-components";

export const StarRating = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0;
`;

export const StarRadio = styled.input.attrs({
  type: "radio",
})`
  display: none;
`;

export const StarLabel = styled.label`
  color: gray;
  font-size: 2rem;
  cursor: pointer;
  transition: color 0.2s;

  &:hover {
    color: orange;
  }

  ${({ isChecked }) =>
      isChecked &&
      css`
        color: orange;
        transform: scale(1.2);
      `}
`;

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
`;

export const LabelDiv = styled.div`
  padding: 1rem 0;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 1.5rem;

  @media (max-width: ${({ theme }) => theme.size.mdl}) {
    flex-direction: column;
    align-items: center;
    gap: 0;
  }

  & > p {
    width: 38rem;
    font-size: 2rem !important;
    @media (max-width: ${({ theme }) => theme.size.md}) {
      width: fit-content;
      min-width: 19rem;
    }
  }
  & > div {
    text-align: center;
    height: fit-content;
  }
`;

export const CardDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  border: 2px solid ${({ theme }) => theme.colors.navColor};
  border-radius: 1rem;
  width: 80vw;
  gap: 1rem;
  margin: 1rem 0 2rem 0;
  padding: 1rem;
  background-color: #d4f1ff;

  @media (max-width: ${({ theme }) => theme.size.mdl}) {
    width: 70%;
    gap: 2rem;
  }
`;

export const MealInfo = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  width: 30%;
  min-width: 13rem;
  height: 100%;

  & > p {
    font-size: 1.1rem;
    text-align: right;
    font-family: "Patrick Hand", cursive;
    line-height: 1.5rem;
    letter-spacing: 0.5px;
    color: black;
    & > span {
      margin-left: 0.3rem;
      color: #de3636;
    }
  }
  @media (max-width: ${({ theme }) => theme.size.mdl}) {
    justify-content: center;
    width: fit-content;
    border: 1px solid ${({ theme }) => theme.colors.navColor};
    border-radius: 0.5rem;
  }
`;

export const IMGDiv = styled.div`
  width: 30%;
  min-width: 15rem;
  display: flex;
  justify-content: center;
  align-items: center;

  & > img {
    border: 1px solid ${({ theme }) => theme.colors.navColor};
    border-radius: 1rem;
    width: 14rem;
    padding: 0.5rem;
    box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
    transition: all 0.3s ease-in-out 0s;

    &:hover {
      transform: scale(1.03);
      box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }
  }

  @media (max-width: ${({ theme }) => theme.size.mdl}) {
    width: fit-content;
    margin: 1rem 0;
    border: 1px solid ${({ theme }) => theme.colors.navColor};
    border-radius: 0.5rem;
  }
`;

export const MealIngredients = styled.div`
  width: 30%;
  min-width: 13rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
  border: 1px solid ${({ theme }) => theme.colors.navColor};
  border-radius: 0.5rem;
  padding: 1rem;

  & > div {
    height: 14rem;
    overflow: auto;

    & > p {
      font-size: 1.1rem;
      font-family: "Patrick Hand", cursive;
      line-height: 1.5rem;
      letter-spacing: 0.5px;
      color: black;

      & > span {
        color: #de3636;
      }
    }
  }

  & > a {
    display: inline-block;
    padding: 0.5rem 1rem;
    margin-top: 1rem;
    color: #fff;
    background-color: ${({ theme }) => theme.colors.navColor};
    border-radius: 0.5rem;
    text-decoration: none;
    text-align: center;
    transition: background-color 0.2s;

    &:hover {
      background-color: ${({ theme }) => theme.colors.turqo};
    }
  }

  @media (max-width: ${({ theme }) => theme.size.mdl}) {
    width: fit-content;
    margin: 1rem 0;
  }
`;

export const PrepLink = styled.a`
  color: #de3636;
  text-decoration: none;
  transition: color 0.2s;

  &:hover {
    color: ${({ theme }) => theme.colors.turqo};
  }
`;
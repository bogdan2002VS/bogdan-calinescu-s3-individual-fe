import styled from "styled-components";

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  /* height: 85vh; */
`;

export const LabelDiv = styled.div`
  padding: 1rem 0;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 1.5rem;
  /* max-width: 90%; */
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
  /* @media (max-width: ${({ theme }) => theme.size.lg}) {
    flex-direction: column;
  } */
  @media (max-width: ${({ theme }) => theme.size.mdl}) {
    width: 70%;
    gap: 2rem;
  }
  @media (max-width: ${({ theme }) => theme.size.md}) {
    /* width: 80%; */
  }
`;

export const MealInfo = styled.div`
  display: flex;
  /* justify-content: flex-end; */
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
    /* background-color: ${({ theme }) => theme.colors.turqo}; */
    border: 1px solid ${({ theme }) => theme.colors.navColor};
    border-radius: 1rem;
    width: 14rem;
    padding: 0.5rem;
    box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
  }
  @media (max-width: ${({ theme }) => theme.size.mdl}) {
    width: 90%;
  }
`;

export const MealIngredients = styled.div`
  width: 30%;
  min-width: 13rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 1rem;
  justify-content: center;
  border: 1px solid ${({ theme }) => theme.colors.navColor};
  border-radius: 0.5rem;
  /* padding: 0.4rem; */
  & > div {
    height: 14rem;
    overflow: auto;
    & > p {
      text-indent: 5px;
      justify-content: flex-start !important;
      text-align: left;
      font-size: 1rem;
      font-family: "Patrick Hand", cursive;
      & > span {
        color: #c44a4a;
      }
    }

    ::-webkit-scrollbar {
      width: 0.8rem;
    }

    ::-webkit-scrollbar-track {
      background: ${({ theme }) => theme.colors.navColor};
      border-radius: 0.5rem;
    }

    ::-webkit-scrollbar-thumb {
      border-radius: 0.5rem;
      background: ${({ theme }) => theme.colors.turqo};

      ::-webkit-scrollbar-hover {
        opacity: 0.5;
      }
    }
  }
  @media (max-width: ${({ theme }) => theme.size.mdl}) {
    /* justify-content: center; */
    /* width: 80%; */
    width: 70%;
  }
`;

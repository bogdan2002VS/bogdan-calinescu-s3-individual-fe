import styled from "styled-components";

const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  background-color: #0bb7c3;
  height: 85vh;
  @media (max-width: ${({ theme }) => theme.size.xs}) {
    height: 87vh;
  }
`;

export const AboutIMG = styled.img`
  width: 20rem;
  /* aspect-ratio: 4/2; */
`;

export const AboutTitle = styled.p`
  margin: 1rem;
  font-family: "Patrick Hand", cursive;
  min-width: 25rem;
  color: #012030;
  font-size: 1.5rem;
  font-weight: 900;
  text-align: center;
  @media (max-width: ${({ theme }) => theme.size.xs}) {
    font-size: 1rem;
  }
  & > span {
    font-size: 2rem;
    color: white;
    @media (max-width: ${({ theme }) => theme.size.xs}) {
      font-size: 1.5rem;
    }
  }
`;

export const AboutTextContainer = styled.div`
  width: 35rem;
  padding: 1rem;
  border: 1px solid #eaf2f3;
  overflow: hidden;
  max-width: 95%;

  @media (max-width: ${({ theme }) => theme.size.xs}) {
    width: 95%;
    min-width: 340px;
  }
  & > p {
    text-align: right;
    text-decoration: none;
    font-size: 1 rem;
    font-family: "Patrick Hand", cursive;
    line-height: 2.5rem;
    font-weight: bold;
    @media (max-width: ${({ theme }) => theme.size.sm}) {
      line-height: 1rem;
      text-align: left;
    }

    & > a {
      text-decoration: none;
      color: #eaf2f3;
      cursor: pointer;
    }
  }
`;

export default AboutContainer;

import styled from "styled-components";

const SectionStyled = styled.section`
  width: 100vw;
  height: 83vh;
  display: flex;
  position: relative;
  font-family: Montserrat, sans-serif;
  @media (max-width: ${({ theme }) => theme.size.sm}) {
    height: 85vh;
  }
`;

export const DivStyled = styled.div`
  width: 80vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  @media (max-width: ${({ theme }) => theme.size.sm}) {
    width: 100vw;
    align-items: center;
    justify-content: flex-start;
  }
  & > img {
    height: 20rem;
    position: absolute;
    right: 0;
    bottom: 0;
    @media (max-width: ${({ theme }) => theme.size.sm}) {
      height: 18rem;
    }
  }

  & > h1 {
    font-size: 10rem;
    font-weight: 100;
  }
  & > p {
    font-weight: 500;
  }
`;

export default SectionStyled;

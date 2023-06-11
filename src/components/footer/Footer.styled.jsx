import styled from "styled-components";

const FooterStyle = styled.footer`
  display: flex;
  text-decoration: none;
  justify-content: space-between;
  background-color: #046A38;
  color: black;
  font-family: "Roboto", sans-serif;
  align-items: center;
  height: 8vh;
  padding: 0 1rem;
  position: relative;
  top: auto;
  bottom: 0;
  transform: translateY(100%); /* Initially hide the footer below the viewport */
  transition: transform 0.3s ease; /* Add a transition for smooth animation */
`;

export const Logos = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 0.7rem;
  & > a {
    transition: all 0.3s linear;
    color: white;
    &:hover {
      color: ${({ theme }) => theme.colors.greenColor};
      transform: scale(1.2);
    }
  }
`;

export const TextStyle = styled.div`
  font-size: 0.7rem;
  color: white;
  & > p {
    color: white;
  }
`;

export default FooterStyle;

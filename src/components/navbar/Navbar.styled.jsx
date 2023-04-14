import styled from "styled-components";

const NavStyle = styled.div`
  margin: 0 !important;
  display: flex;
  flex-direction: column;
  & > a {
    color: black;
    text-decoration: none;
    text-align: left;
    transition: all 0.4s ease-in-out;
    padding: 0.7rem 1rem;
    font-weight: 500;
    :hover {
      color: #4CAF50 !important;
      background-color: #2E7D32;
    }
  }
`;

export const LinkStyle = styled.div`
  margin: auto 0;
  font-family: "Roboto", sans-serif;
  cursor: pointer;
  & > a {
    /* margin-left: 1rem; */

    text-decoration: none;
    text-transform: uppercase;
    color: white;
    transition: all 0.5s ease-in-out;
    padding: 0.7rem 0.5rem;
    border-radius: 5px;
    :hover {
      color: white !important;
      background-color: #2E7D32;
    }
  }
`;

export const HamburgerLink = styled.section`
  margin: auto 0;
  font-family: "Roboto", sans-serif;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  color: black;
  & > a {
    text-align: left;
    text-decoration: none;
    text-transform: uppercase;
    transition: all 0.4s ease-in-out;
    padding: 0.5rem 0.7rem;
    font-weight: 500;
    :hover {
      color: #4CAF50 !important;
      background-color: #2E7D32;
    }
  }
`;
export default NavStyle;

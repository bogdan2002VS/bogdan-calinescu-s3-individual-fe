// export default HeaderContainer;
import styled from "styled-components";

export const Main = styled("div")`
  font-family: sans-serif;
  background: #4CAF50;
  /* height: 100vh; */
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  padding: 1rem 0;
  font-family: Montserrat, sans-serif;
  gap: 1rem;
  background-color: #4CAF50};
`;

export const H1 = styled.h1`
  font-weight: bolder;
`;

export const FormContainer = styled.form`
  display: flex;
  gap: 1rem;
  padding: 0.5rem 1rem;
  border: 2px solid #e1e6fa;
  border-radius: 1rem;
  min-height: 4rem;
  background-color: #4CAF50;
  @media (max-width: ${({ theme }) => theme.size.sm}) {
    flex-direction: column;
    align-items: center;
  }
`;

export const ButtonStyle = styled.button`
  padding: 1rem;
  background-color: #4CAF50;
  border: 2px solid ${({ theme }) => theme.colors.buttonBg};
  border-radius: 1rem;
  color: ${({ theme }) => theme.colors.buttonBg};
  text-decoration: none;
  padding: 5px 10px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.7s ease-in-out;
  font-size: 1.1rem;
  :hover {
    opacity: 0.9;
    color: white;
    background-color: #011526;
    border: 2px solid ${({ theme }) => theme.colors.greenColor};
  }
  :active {
    opacity: 1;
  }
  @media (max-width: ${({ theme }) => theme.size.sm}) {
    width: 10rem;
  }
`;

export const Input = styled.input`
  text-indent: 0.3rem;
  padding: 0.5rem 1rem;
  border-radius: 1rem;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.buttonBg};
  caret-color: ${({ theme }) => theme.colors.buttonBg};
  transition: all 0.5s;
  border: 2px solid ${({ theme }) => theme.colors.buttonBg};
  font-weight: bold;
  ::placeholder {
    font-weight: bold;
    font-family: Montserrat, sans-serif;
  }
  &:focus {
    border: 2px solid ${({ theme }) => theme.colors.greenColor};
    outline: none;
  }
  @media (max-width: ${({ theme }) => theme.size.sm}) {
    width: 15rem;
    height: 2rem;
    font-weight: 500;

    ::placeholder {
      font-weight: 500;
    }
  }
`;

export const Select = styled.select`
  font-family: Montserrat, sans-serif;
  padding: 0 10px;
  font-size: 1.1rem;
  transition: all 0.7s ease-in-out;
  border: 1px solid ${({ theme }) => theme.colors.buttonBg};
  border-radius: 1rem;
  font-weight: 600;
  option {
    color: ${({ theme }) => theme.colors.buttonBg};
  }
  @media (max-width: ${({ theme }) => theme.size.sm}) {
    width: 12rem;
    text-align: center;
  }
`;

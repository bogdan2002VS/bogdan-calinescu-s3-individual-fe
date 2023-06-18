import styled from "styled-components";

export const LoginStyled = styled.div`
  /* background-image: linear-gradient(to right, #0098f795, #f116129e); */
  height: 100vh;
  background-image: url("https://picsum.photos/1920/1080");
  background-repeat: no-repeat;
  background-size: 100% 100%; /* Updated property */
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Roboto", sans-serif;
  transition: all 1s;
`;


export const FormContainer = styled.div`
  transition: all 1s;
  border: 2px solid ${({ theme }) => theme.colors.turqo};
  border-radius: 50%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  color: white;
  background-color: #3d3a3a8f;
  letter-spacing: 0.2rem;
  padding: 2rem;
  gap: 0.5rem;
  width: 22rem;
  /* height: 20rem; */
`;

export const Header = styled.h1`
  color: white;
  font-size: 2rem;
`;

export const InputStyled = styled.input`
  border-radius: 0.3rem;
  background-color: #050f24af;
  color: #f8f8f8;
  width: 10rem;
  height: 2rem;
  text-indent: 10px;
  outline: none;
  border: inherit;
  ::placeholder {
    color: #ffffffa5;
  }
  &:focus {
    transition: all 0.5s;
    outline: none;
    border: 1px solid white;
    transform: scale(1.05);
  }
`;

export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const ButtonStyled = styled.button`
  margin: 0.5 rem;
  border-radius: 2rem;
  border: none;
  height: 2rem;
  width: auto;
  background: ${({ theme }) => theme.colors.turqo};
  font-weight: bold;
  color: white;
  cursor: pointer;
  transition: 0.7s ease-in-out;
  outline: 2px solid ${({ theme }) => theme.colors.turqo};

  :hover {
    transform: scale(1.1);
    color: ${({ theme }) => theme.colors.navColor};
    outline: 2px solid ${({ theme }) => theme.colors.buttonBg};
  }
`;

export const IMGStyled = styled.img`
  width: 8rem;
  /* margin: 1rem; */
`;

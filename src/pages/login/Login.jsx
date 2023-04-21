import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUserCall } from '../../service/userService';
import { toast } from 'react-toastify';
import { setLoggedUser } from '../../redux/userSlice';
import { useNavigate } from 'react-router-dom';
import {
  LoginStyled,
  FormContainer,
  Header,
  InputStyled,
  FormStyled,
  ButtonStyled,
} from './Login.styled';

const Login = () => {
  const navigate = useNavigate();
  const [formState, setFormState] = useState({ username: '', password: '' });
  const dispatch = useDispatch();
  const loggedUser = useSelector((state) => state.user.loggedUser);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await loginUserCall(formState);
      console.log(res);
      toast.success(res.message);
      window.sessionStorage.setItem('tkn', res.obj.accessToken);
      dispatch(setLoggedUser(res.obj.user));
      navigate('/home');
    } catch (err) {
      toast.error('Incorrect username or password');
    }
  };

  const handleFormChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormState({ ...formState, [name]: value });
  };

  return (
    <LoginStyled>
      <FormContainer>
        <Header>Veganny</Header>
        <FormStyled onSubmit={handleSubmit}>
          <InputStyled
            type="text"
            placeholder="Username"
            name="username"
            value={formState.username}
            onChange={handleFormChange}
            required
          />
          <InputStyled
            type="password"
            placeholder="Password"
            name="password"
            value={formState.password}
            onChange={handleFormChange}
            required
          />
          <ButtonStyled type="submit">Login</ButtonStyled>
        </FormStyled>
      </FormContainer>
    </LoginStyled>
  );
};

export default Login;

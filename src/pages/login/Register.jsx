
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { registerUserCall } from '../../service/userService';

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


const Register = (props) => {
  const navigate = useNavigate();
  const [formState, setFormState] = useState({
    firstName: '',
    lastName: '',
    address: '',
    phone: '',
    email: '',
    username: '',
    password: '',
  });

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const res = await registerUserCall(formState);
      toast.success(res.message);
      navigate('/');
    } catch (err) {
      toast.error(err);
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
          <h4 className="mb-4 pb-2 pb-md-0 mb-md-5">Create an account</h4>
          <InputStyled
            type="text"
            placeholder="First Name"
            name="firstName"
            value={formState.firstName}
            onChange={handleFormChange}
            required
          />
          <InputStyled
            type="text"
            placeholder="Last Name"
            name="lastName"
            value={formState.lastName}
            onChange={handleFormChange}
            required
          />
          <InputStyled
            type="text"
            placeholder="Address"
            name="address"
            value={formState.address}
            onChange={handleFormChange}
            required
          />
          <InputStyled
            type="text"
            placeholder="Phone"
            name="phone"
            value={formState.phone}
            onChange={handleFormChange}
            required
          />
          <InputStyled
            type="email"
            placeholder="Email"
            name="email"
            value={formState.email}
            onChange={handleFormChange}
            required
          />
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
          <ButtonStyled type="submit">Register</ButtonStyled>
        </FormStyled>
      </FormContainer>
    </LoginStyled>
  );
};

export default Register;

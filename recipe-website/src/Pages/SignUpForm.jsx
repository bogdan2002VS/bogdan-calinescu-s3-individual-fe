import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function SignUpForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ firstName, lastName, email });
  };

  return (
    <form
      onSubmit={handleSubmit}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 4,
      }}
    >
      <TextField
        label="First Name"
        value={firstName}
        onChange={(event) => setFirstName(event.target.value)}
        sx={{ marginBottom: 2 }}
      />
      <TextField
        label="Last Name"
        value={lastName}
        onChange={(event) => setLastName(event.target.value)}
        sx={{ marginBottom: 2 }}
      />
      <TextField
        label="Email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        sx={{ marginBottom: 2 }}
      />
      <Button variant="contained" type="submit" sx={{ marginTop: 2 }}>
        Submit
      </Button>
    </form>
  );
}

export default SignUpForm;

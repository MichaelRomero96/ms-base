import { Card, Grid, Typography, TextField, Button } from '@mui/material';
import React from 'react';
import { useState, FC } from 'react';
import { useDispatch } from 'react-redux';
import { auth } from '../../../api/storage';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { AuthType } from '../types';

interface Props {
  setAuthType: React.Dispatch<React.SetStateAction<AuthType>>;
}
interface User {
  email: string;
  password: string;
}

const Login: FC<Props> = ({ setAuthType }) => {
  const dispatch = useDispatch();
  const [user, setUser] = useState<User>({
    email: '',
    password: '',
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };
  const handleCreateUser = async () => {
    await createUserWithEmailAndPassword(auth, user.email, user.password)
      .then((userCredential) => {
        console.log(userCredential.user);
      })
      .catch((error) => {
        console.log(error);
      });
    /* dispatch(login(user)) */
  };
  return (
    <Grid
      container
      sx={{
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Grid
        sx={{ height: '30rem' }}
        gap={2}
        item
        xs={4}
        container
        component={Card}
        bgcolor="rgba(240,240,240)"
        elevation={10}
        p={2}
      >
        <Grid item xs={12}>
          <Typography
            color="primary"
            variant="h5"
            fontSize={30}
            sx={{ textAlign: 'center' }}
          >
            Login
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <TextField
            name="email"
            onChange={handleChange}
            variant="filled"
            label="Email"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            name="password"
            onChange={handleChange}
            variant="filled"
            label="Password"
            fullWidth
          />
        </Grid>
        <Grid container justifyContent={'center'}>
          <Grid item xs={12}>
            <Button
              onClick={handleCreateUser}
              variant="contained"
              sx={{ display: 'block', width: '80%', margin: '0 auto' }}
            >
              Login
            </Button>
          </Grid>
          <Grid container justifyContent={'center'}>
            <Grid item>
              <Typography mt={2} style={{ fontSize: '18px' }}>
                Don't you currently have an account?
                <Button
                  onClick={() => setAuthType(AuthType.Register)}
                  sx={{
                    fontSize: '15px',
                    fontWeight: '700',
                    textDecoration: 'underline',
                  }}
                >
                  Register
                </Button>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Login;

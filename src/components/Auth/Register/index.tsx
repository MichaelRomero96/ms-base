import { FC, useState } from 'react';
import { AuthType } from '../types';
import { Button, Card, Grid, TextField, Typography } from '@mui/material';
import { auth } from '../../../api/storage';
import { createUserWithEmailAndPassword } from 'firebase/auth';

interface Props {
  setAuthType: React.Dispatch<React.SetStateAction<AuthType>>;
}
interface UserRegister {
  userName: string;
  email: string;
  password: string;
  repeatPassword: string;
}

const Register: FC<Props> = ({ setAuthType }) => {
  const [register, setRegister] = useState<UserRegister>({
    userName: '',
    email: '',
    password: '',
    repeatPassword: '',
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRegister({
      ...register,
      [e.target.name]: e.target.value,
    });
  };
  const handleCreateUser = async () => {
    await createUserWithEmailAndPassword(
      auth,
      register.userName,
      register.password
    )
      .then((userCredential) => {
        console.log(userCredential.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
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
          sx={{ height: '40rem' }}
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
              Register
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <TextField
              onChange={handleChange}
              name="name"
              label="User Name"
              variant="filled"
              fullWidth
            ></TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField
              onChange={handleChange}
              name="email"
              label="Email"
              variant="filled"
              fullWidth
            ></TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField
              onChange={handleChange}
              name="password"
              label="Password"
              variant="filled"
              fullWidth
            ></TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField
              onChange={handleChange}
              name="confirm password"
              label="Confirm Password"
              variant="filled"
              fullWidth
            ></TextField>
          </Grid>
          <Grid container justifyContent={'center'}>
            <Grid item xs={12}>
              <Button
                onClick={handleCreateUser}
                variant="contained"
                sx={{ display: 'block', width: '80%', margin: '0 auto' }}
              >
                Create Account
              </Button>
            </Grid>
          </Grid>
          <Grid container justifyContent={'center'}>
            <Grid item>
              <Typography style={{ fontSize: '18px' }}>
                Do you currently have an account?
                <Button
                  onClick={() => setAuthType(AuthType.Login)}
                  sx={{
                    fontSize: '15px',
                    fontWeight: '700',
                    textDecoration: 'underline',
                  }}
                >
                  Login
                </Button>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Register;

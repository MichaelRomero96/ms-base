import { Card, Grid, Typography, TextField, Button } from '@mui/material'
import React from 'react'
import { useState } from 'react';
import { login } from '../../../store/slices/auth';
import { useDispatch } from 'react-redux';
import { auth } from '../../../api/storage';
import { createUserWithEmailAndPassword } from 'firebase/auth';

interface User {
	email: string;
	password: string;
}

const Login = () => {
	const dispatch = useDispatch();
	const [user, setUser] = useState<User>({
		email: '',
		password: ''
	});
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setUser({
			...user,
			[e.target.name]: e.target.value
		})
	}
	const handleCreateUser = async () => {
		await createUserWithEmailAndPassword(auth, user.email, user.password).then((userCredential) => {
			console.log(userCredential.user);
		}).catch((error) => {
			console.log(error);
		})
		/* dispatch(login(user)) */
	}
	return (
		<Grid container sx={{ minHeight: '80vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
			<Grid gap={2} item xs={4} container component={Card} bgcolor='rgba(240,240,240)' elevation={10} p={2}>
				<Grid item xs={12} mb={2}>
					<Typography color='primary' variant='h5'>Login</Typography>
				</Grid>
				<Grid item xs={12}>
					<TextField name='email' onChange={handleChange} variant='filled' label='Email' fullWidth />
				</Grid>
				<Grid item xs={12}>
					<TextField name='password' onChange={handleChange} variant='filled' label='Password' fullWidth />
				</Grid>
				<Grid item xs={12}>
					<Button onClick={handleCreateUser} color='primary' variant='contained' fullWidth>Login</Button>
				</Grid>
			</Grid>
		</Grid>
	)
}

export default Login
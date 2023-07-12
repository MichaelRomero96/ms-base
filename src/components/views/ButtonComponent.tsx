import * as React from 'react';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';

export default function ButtonComponent() {
	return (
		<div>
			<Button color='error' variant="contained"><Typography>I am a Button</Typography></Button>
		</div>
	);
}
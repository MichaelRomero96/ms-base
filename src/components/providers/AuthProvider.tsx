import React, { FC } from 'react'
import Login from '../Auth/Login'
import { RootState } from '../../store/index';
import { useSelector } from 'react-redux';
import Auth from '../Auth';

interface Props {
	children: React.ReactNode
}


const AuthProvider: FC<Props> = ({ children }) => {
	const user = useSelector((state: RootState) => state.auth.user);

	if (user !== null) {
		return (
			<>{children}</>
		)
	}

	return (
		<Auth />
	)
}

export default AuthProvider
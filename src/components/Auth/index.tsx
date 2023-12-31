import React, { useState } from 'react';
import Login from './Login';
import Register from './Register';
import { AuthType } from './types';

const Auth = () => {
  // create a state to toogle between login and register
  const [authType, setAuthType] = useState<AuthType>(AuthType.Login);
  if (authType === AuthType.Login) return <Login setAuthType={setAuthType} />;
  return <Register setAuthType={setAuthType} />;
};

export default Auth;

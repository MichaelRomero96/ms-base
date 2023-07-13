import { FC } from 'react';
import { AuthType } from '../types';

interface Props {
  setAuthType: React.Dispatch<React.SetStateAction<AuthType>>;
}

const Register: FC<Props> = ({ setAuthType }) => {
  // create que esta en login
  // do you currently have an account? login
  return (
    <>
      <div> Register here</div>
      <p onClick={() => setAuthType(AuthType.Login)}>vaya a login</p>
    </>
  );
};

export default Register;

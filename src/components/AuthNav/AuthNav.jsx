import { AuthLink, Wrapper } from './AuthNav.styled';
import { CiLogin } from 'react-icons/ci';

const AuthNav = () => {
  return (
    <Wrapper>
      <AuthLink to="/register">Register</AuthLink>
      <AuthLink to="/login">
        <CiLogin />
      </AuthLink>
    </Wrapper>
  );
};

export default AuthNav;

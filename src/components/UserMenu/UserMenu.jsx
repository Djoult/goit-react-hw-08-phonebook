import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/authOperations';
import { useAuth } from 'hooks/useAuth';
import { UserName, Wrapper, Button, SpanIcon } from './UserMenu.styled';
import { CiLogout } from 'react-icons/ci';
import { RxAvatar } from 'react-icons/rx';

const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  const onLogOut = () => {
    dispatch(logOut());
  };

  return (
    <Wrapper>
      <UserName>
        <SpanIcon
          inputColor={`#${Math.floor(Math.random() * 16777215).toString(16)}`}
        >
          <RxAvatar />
        </SpanIcon>
        {user.name}
      </UserName>

      <Button type="button" onClick={onLogOut}>
        <CiLogout />
      </Button>
    </Wrapper>
  );
};

export default UserMenu;

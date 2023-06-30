import { useAuth } from 'hooks/useAuth';

import { Text, Link, Box, Section, Title } from './Home.styled';

export const Home = () => {
  const { isLoggedIn } = useAuth();

  return (
    <>
      <Section margin="calc(10%) 0 0 0">
        <Title size="50px" margin="0 0 20px 0" position="center">
          Here can be your ads 🗿
        </Title>
      </Section>
      {!isLoggedIn ? (
        <Box>
          <Text>
            Please <Link to="/login">log in</Link> to your account to view your
            contacts.
          </Text>
          <Text>
            If you are not registered yet, please{' '}
            <Link to="/register">register</Link>
            {'.'}
          </Text>
        </Box>
      ) : (
        <Box>
          <Text>
            You can view <Link to="/contacts"> your contacts</Link>
          </Text>
        </Box>
      )}
      ;
    </>
  );
};

export default Home;

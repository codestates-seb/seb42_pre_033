import styled from 'styled-components';
import Oauth from '../components/Login/Oauth';
import Main from '../components/Main';
import SignupBottom from '../components/Signup/SignupBottom';
import SignupForm from '../components/Signup/SignupForm';
import SignupHeader from '../components/Signup/SignupHeader';

const Container = styled.section`
  display: flex;
  gap: 48px;
`;

const SignupFormContainer = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;
`;

function SignupPage() {
  const onSubmit = () => {};

  return (
    <Main>
      <Container>
        <SignupHeader />
        <SignupFormContainer>
          <Oauth />
          <SignupForm onSubmit={onSubmit} />
          <SignupBottom />
        </SignupFormContainer>
      </Container>
    </Main>
  );
}

export default SignupPage;

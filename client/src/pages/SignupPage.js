import styled from 'styled-components';
import Oauth from '../components/layout/Oauth';
import SignupBottom from '../components/Signup/SignupBottom';
import SignupForm from '../components/Signup/SignupForm';
import SignupHeader from '../components/Signup/SignupHeader';

const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100vw;
  gap: 48px;
  background-color: var(--black-050);
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
    <Container>
      <SignupHeader />
      <SignupFormContainer>
        <Oauth />
        <SignupForm onSubmit={onSubmit} />
        <SignupBottom />
      </SignupFormContainer>
    </Container>
  );
}

export default SignupPage;

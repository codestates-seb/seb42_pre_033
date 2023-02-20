import styled from 'styled-components';
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
  gap: 24px;
`;

function SignupPage() {
  const onSubmit = () => {};

  return (
    <Container>
      <SignupHeader />
      <SignupFormContainer>
        <SignupForm onSubmit={onSubmit} />
        <SignupBottom />
      </SignupFormContainer>
    </Container>
  );
}

export default SignupPage;

import axios from 'axios';
import styled from 'styled-components';
import Oauth from '../components/layout/Oauth';
import SignupBottom from '../components/Signup/SignupBottom';
import SignupForm from '../components/Signup/SignupForm';
import SignupHeader from '../components/Signup/SignupHeader';
import { useAuthContext } from '../hooks/useAuthContext';

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
  const { login } = useAuthContext();

  const onSubmit = ({ email, password, nickname }) => {
    axios({
      method: 'post',
      url: '/members',
      data: { email, password, nickname },
    })
      .then((response) => {
        if (response.status === 409) {
          // error coming back from server
          console.log(response.message);
          return;
        }

        if (response.status === 400) {
          console.log('입력값 오류');
          return;
        }

        if (response.status !== 201) {
          console.log('서버 오류');
          return;
        }

        login(response.headers.authorization, response.headers.refresh);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

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

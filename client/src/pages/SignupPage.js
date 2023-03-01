import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Oauth from '../components/layout/Oauth';
import SignupBottom from '../components/Signup/SignupBottom';
import SignupForm from '../components/Signup/SignupForm';
import SignupHeader from '../components/Signup/SignupHeader';
import SignupPolicy from '../components/Signup/SignupPolicy';
import Card from '../components/UI/Card';

const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100vw;
  gap: 48px;
  background-color: var(--black-050);
`;

const SignupContainer = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;
`;

const SignupFormContainer = styled(Card)`
  width: 310px;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

function SignupPage() {
  const navigate = useNavigate();

  const onSubmit = ({ email, password, nickname }) => {
    axios({
      method: 'post',
      url: '/api/members/signup',
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

        navigate('/login');
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <Container>
      <SignupHeader />
      <SignupContainer>
        <Oauth />
        <SignupFormContainer>
          <SignupForm onSubmit={onSubmit} />
          <SignupPolicy />
        </SignupFormContainer>
        <SignupBottom />
      </SignupContainer>
    </Container>
  );
}

export default SignupPage;

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Error from '../components/Error/Error';
import Oauth from '../components/layout/Oauth';
import SignupBottom from '../components/Signup/SignupBottom';
import SignupForm from '../components/Signup/SignupForm';
import SignupHeader from '../components/Signup/SignupHeader';
import SignupPolicy from '../components/Signup/SignupPolicy';
import Card from '../components/UI/Card';
import { postSignup } from '../utils/api';

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
  const [errors, setErrors] = useState([]);

  const onSubmit = async ({ email, password, nickname, reset }) => {
    const { data, status } = await postSignup({ email, password, nickname });

    if (status === 409) {
      setErrors([data.message]);
      return;
    }

    if (status === 400 && data?.fieldErrors?.length > 0) {
      setErrors(data?.fieldErrors?.map(({ reason }) => reason));
      return;
    }

    if (status !== 201) {
      setErrors([
        '회원가입 진행중 서버 오류가 발생하였습니다. 잠시 후 다시 요청해주세요',
      ]);
      return;
    }

    navigate('/login');
    reset();
  };

  return (
    <Container>
      <SignupHeader />
      <SignupContainer>
        <Oauth />
        <SignupFormContainer>
          <SignupForm onSubmit={onSubmit} />
          <Error messages={errors} />
          <SignupPolicy />
        </SignupFormContainer>
        <SignupBottom />
      </SignupContainer>
    </Container>
  );
}

export default SignupPage;

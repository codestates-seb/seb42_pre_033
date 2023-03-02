import styled from 'styled-components';
import LoginHeader from '../components/Login/LoginHeader';
import Oauth from '../components/layout/Oauth';
import LoginForm from '../components/Login/LoginForm';
import LoginBottom from '../components/Login/LoginBottom';
import { postLogin } from '../utils/api';
import { useState } from 'react';
import { useAuthContext } from '../hooks/useAuthContext';

const LoginComponent = styled.section`
  width: 100vw;
  height: 100%;
  background-color: var(--black-050);
`;
const LoginWrapper = styled.div`
  width: 289px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

function LoginPage() {
  const [errors, setErrors] = useState([]);

  const { login } = useAuthContext();

  const onSubmit = async ({ email, password, reset }) => {
    const { headers, data, status } = await postLogin({ email, password });
    console.log(headers);

    if (status === 409) {
      setErrors([data.message]);
      return;
    }

    if (status === 400 && data?.fieldErrors?.length > 0) {
      setErrors(data?.fieldErrors?.map(({ reason }) => reason));
      return;
    }

    if (status !== 200) {
      setErrors([
        '로그인 중 서버 오류가 발생하였습니다. 잠시 후 다시 요청해주세요',
      ]);
      return;
    }
    login(headers.authorization, headers.refresh);
    reset();
  };

  return (
    <LoginComponent>
      <LoginWrapper>
        <LoginHeader />
        <Oauth />
        <LoginForm onSubmit={onSubmit} messages={errors} />
        <LoginBottom />
      </LoginWrapper>
    </LoginComponent>
  );
}

export default LoginPage;

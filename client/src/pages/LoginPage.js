import styled from 'styled-components';
import LoginHeader from '../components/Login/LoginHeader';
import Oauth from '../components/layout/Oauth';
import LoginForm from '../components/Login/LoginForm';
import LoginBottom from '../components/Login/LoginBottom';

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
  const onSubmit = () => {};
  return (
    <LoginComponent>
      <LoginWrapper>
        <LoginHeader />
        <Oauth />
        <LoginForm onSubmit={onSubmit} />
        <LoginBottom />
      </LoginWrapper>
    </LoginComponent>
  );
}

export default LoginPage;

import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Button from '../UI/Button';
import Oauth from './Oauth';

const LoginComponent = styled.div`
  height: calc(100vh - 50px);
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

const LogoSvg = styled.svg`
  margin-bottom: 24px;
  cursor: pointer;
`;

const FormContainer = styled.div`
  background-color: var(--white);
  width: 289px;
  height: 234px;
  padding: 24px;
  margin: 16px 0 12px;
  box-shadow: 0 10px 24px hsla(0, 0%, 0%, 0.05),
    0 20px 48px hsla(0, 0%, 0%, 0.05), 0 1px 4px hsla(0, 0%, 0%, 0.1);
  border-radius: 7px;

  /* 나중에 기능 구현을 위해 Input 페이지 따로 만들 예정... */

  form {
    width: 241px;
    height: 199px;
    display: flex;
    flex-direction: column;

    label {
      font-weight: 600;
      font-size: 1rem;

      span {
        margin-left: 60px;
        font-weight: normal;
        font-size: 12px;
        color: var(--blue-600);
        cursor: pointer;
        :hover {
          color: var(--blue-500);
        }
      }
    }

    input {
      padding: 0.6em 0.7em;
      margin: 6px 0 15px;
      border: 1px solid var(--black-200);
      border-radius: 3px;
      background-color: var(--white);
      color: hsl(210, 8%, 5%);
      font-size: 13px;
    }

    .login_btn {
      height: 37.8px;
    }
  }
`;
const LoginQuestion = styled.div`
  width: 288px;
  padding: 16px;
  font-size: 13px;
`;

const LoginQuestionP = styled.p`
  text-align: center;
  margin: 12px 0;
`;

const LoginQuestionSpan = styled.span`
  position: relative;
  margin: 0 5px;
  color: var(--blue-600);
  cursor: pointer;
  :hover {
    color: var(--blue-500);
  }
`;

const SvgIcon = styled.svg`
  position: absolute;
  top: 1px;
  right: -17px;
  :hover {
    color: var(--blue-500);
  }
`;

function Login() {
  return (
    <LoginComponent>
      <LoginWrapper>
        <Link to='/'>
          <LogoSvg
            aria-hidden='true'
            className='native svg-icon iconLogoGlyphMd'
            width='32'
            height='37'
            viewBox='0 0 32 37'
          >
            <path d='M26 33v-9h4v13H0V24h4v9h22Z' fill='#BCBBBB'></path>
            <path
              d='m21.5 0-2.7 2 9.9 13.3 2.7-2L21.5 0ZM26 18.4 13.3 7.8l2.1-2.5 12.7 10.6-2.1 2.5ZM9.1 15.2l15 7 1.4-3-15-7-1.4 3Zm14 10.79.68-2.95-16.1-3.35L7 23l16.1 2.99ZM23 30H7v-3h16v3Z'
              fill='#F48024'
            ></path>
          </LogoSvg>
        </Link>
        <Oauth />
        <FormContainer>
          <form>
            <label htmlFor='email'>Email</label>
            <input type='text' id='email'></input>
            <label htmlFor='password'>
              Password <span>Forgot password?</span>
            </label>
            <input type='text' id='password'></input>
            <Button className='login_btn'>Log in</Button>
          </form>
        </FormContainer>
        <LoginQuestion>
          <LoginQuestionP>
            Don&apos;t have an account?{' '}
            <LoginQuestionSpan>Sign up</LoginQuestionSpan>
          </LoginQuestionP>
          <p>
            Are you an employer?
            <LoginQuestionSpan>
              Sign up on Talent
              <SvgIcon
                fill='var(--blue-600)'
                aria-hidden='true'
                width='14'
                height='14'
                viewBox='0 0 14 14'
              >
                <path d='M5 1H3a2 2 0 0 0-2 2v8c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V9h-2v2H3V3h2V1Zm2 0h6v6h-2V4.5L6.5 9 5 7.5 9.5 3H7V1Z'></path>
              </SvgIcon>
            </LoginQuestionSpan>
          </p>
        </LoginQuestion>
      </LoginWrapper>
    </LoginComponent>
  );
}

export default Login;

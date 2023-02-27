import styled from 'styled-components';
import { Link } from 'react-router-dom';

const LoginQuestion = styled.div`
  width: 288px;
  padding: 16px;
  font-size: 13px;
`;

const LoginQuestionText = styled.p`
  text-align: center;
  margin: 12px 0;
`;

const LoginQuestionLink = styled.span`
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

function LoginBottom() {
  return (
    <LoginQuestion>
      <LoginQuestionText>
        Don&apos;t have an account?{' '}
        <Link to='/signup'>
          <LoginQuestionLink>Sign up</LoginQuestionLink>
        </Link>
      </LoginQuestionText>
      <p>
        Are you an employer?
        <LoginQuestionLink>
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
        </LoginQuestionLink>
      </p>
    </LoginQuestion>
  );
}

export default LoginBottom;

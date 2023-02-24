import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  width: 310px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 16px;
  justify-content: center;
  align-items: center;
`;

const Content = styled.p`
  font-size: 13px;
`;

const LoginLink = styled(Link)`
  cursor: pointer;
  color: var(--blue-600);
`;

const SignupQuestion = styled.span`
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

function SignupBottom() {
  return (
    <Container>
      <Content>
        Already have an account? <LoginLink to='/login'>Log in</LoginLink>{' '}
      </Content>
      <Content>
        Are you an employer?{' '}
        <LoginLink to='/login'>
          <SignupQuestion>
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
          </SignupQuestion>
        </LoginLink>
      </Content>
    </Container>
  );
}

export default SignupBottom;

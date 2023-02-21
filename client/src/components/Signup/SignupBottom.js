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

function SignupBottom() {
  return (
    <Container>
      <Content>
        Already have an account? <LoginLink to='/login'>Log in</LoginLink>{' '}
      </Content>
      <Content>
        Are you an employer?{' '}
        <LoginLink to='/login'>Sign up on Talent</LoginLink>
      </Content>
    </Container>
  );
}

export default SignupBottom;

import styled from 'styled-components';

const ErrorContainer = styled.div`
  text-align: left;
`;

const Error = styled.p`
  font-size: 12px;
  color: var(--red);
`;

function SignupError({ message }) {
  return (
    <ErrorContainer>
      <Error>{message}</Error>
    </ErrorContainer>
  );
}

export default SignupError;

import styled from 'styled-components';
import Button from '../UI/Button';

const FormContainer = styled.div`
  background-color: var(--white);
  width: 289px;
  height: 234px;
  padding: 24px;
  margin: 16px 0 12px;
  box-shadow: 0 10px 24px hsla(0, 0%, 0%, 0.05),
    0 20px 48px hsla(0, 0%, 0%, 0.05), 0 1px 4px hsla(0, 0%, 0%, 0.1);
  border-radius: 7px;
`;

const Form = styled.form`
  width: 241px;
  height: 199px;
  display: flex;
  flex-direction: column;

  .login_btn {
    height: 37.8px;
  }
`;

const FormLabel = styled.label`
  font-weight: 600;
  font-size: 1rem;
`;

const InputBox = styled.input`
  padding: 0.6em 0.7em;
  margin: 6px 0 15px;
  border: 1px solid var(--black-200);
  border-radius: 3px;
  background-color: var(--white);
  color: hsl(210, 8%, 5%);
  font-size: 13px;
`;

const ForgotText = styled.span`
  margin-left: 60px;
  font-weight: normal;
  font-size: 12px;
  color: var(--blue-600);
  cursor: pointer;
  :hover {
    color: var(--blue-500);
  }
`;

function LoginForm({ onSubmit }) {
  const handleSubmit = (event) => {
    event.preventDefault();

    onSubmit();
  };
  return (
    <FormContainer onSubmit={handleSubmit}>
      <Form>
        <FormLabel htmlFor='email'>Email</FormLabel>
        <InputBox type='text' id='email'></InputBox>
        <FormLabel htmlFor='password'>
          Password <ForgotText>Forgot password?</ForgotText>
        </FormLabel>
        <InputBox type='password' id='password'></InputBox>
        <Button className='login_btn'>Log in</Button>
      </Form>
    </FormContainer>
  );
}

export default LoginForm;

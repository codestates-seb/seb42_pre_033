import styled from 'styled-components';
import Button from '../UI/Button';
import useInputs from '../../hooks/useInputs';
import { useState } from 'react';

const FormContainer = styled.div`
  background-color: var(--white);
  width: 289px;
  height: auto;
  padding: 24px;
  margin: 16px 0 12px;
  box-shadow: 0 10px 24px hsla(0, 0%, 0%, 0.05),
    0 20px 48px hsla(0, 0%, 0%, 0.05), 0 1px 4px hsla(0, 0%, 0%, 0.1);
  border-radius: 7px;
`;

const Form = styled.form`
  width: 241px;
  height: auto;
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

const ErrorMessage = styled.div`
  font-size: 13px;
  color: var(--red-400);
  margin: 20px 0;
`;

function LoginForm({ onSubmit }) {
  const [errorMessage, setErrorMessage] = useState('');

  const [{ email, password }, onChange, reset] = useInputs({
    email: '',
    password: '',
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    onSubmit({ email, password, reset });

    if (!email || !password) {
      setErrorMessage('Please Enter valid Email and Password');
      return;
    }
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <Form>
        <FormLabel htmlFor='email'>Email</FormLabel>
        <InputBox
          type='text'
          id='email'
          name='email'
          onChange={onChange}
        ></InputBox>
        <FormLabel htmlFor='password'>
          Password <ForgotText>Forgot password?</ForgotText>
        </FormLabel>
        <InputBox
          type='password'
          id='password'
          name='password'
          onChange={onChange}
        ></InputBox>
        <Button className='login_btn'>Log in</Button>
        {errorMessage ? <ErrorMessage>{errorMessage}</ErrorMessage> : ''}
      </Form>
    </FormContainer>
  );
}

export default LoginForm;

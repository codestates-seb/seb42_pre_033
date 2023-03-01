import styled from 'styled-components';
import useInputs from '../../hooks/useInputs';
import Button from '../UI/Button';
import Input from '../UI/Input';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: -6px 0;
  gap: 16px;
`;

const FormCaption = styled.p`
  color: var(--fc-light);
  font-size: 12px;
  margin-top: -6px;
`;

function SignupForm({ onSubmit }) {
  const [{ nickname, email, password }, onChange, reset] = useInputs({
    nickname: '',
    email: '',
    password: '',
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    onSubmit({ nickname, email, password });
    reset();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        value={nickname}
        name='nickname'
        id='nickname'
        label='Display name'
        type='text'
        onChange={onChange}
      />
      <Input
        value={email}
        name='email'
        id='email'
        label='Email'
        type='email'
        onChange={onChange}
      />
      <Input
        value={password}
        name='password'
        label='Password'
        id='password'
        type='password'
        onChange={onChange}
      />
      <FormCaption>
        Passwords must contain at least eight characters, including at least 1
        letter and 1 number.
      </FormCaption>
      <Button type='submit'>Sign up</Button>
    </Form>
  );
}

export default SignupForm;

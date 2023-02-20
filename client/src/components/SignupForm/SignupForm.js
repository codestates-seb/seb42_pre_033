import styled from 'styled-components';
import Button from '../UI/Button';
import Card from '../UI/Card';
import Input from '../UI/Input';

const Container = styled(Card)`
  width: 310px;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

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

const Policy = styled.div`
  text-align: left;
  color: var(--fc-light);
  font-size: 12px;
`;

const PolicyLink = styled.a`
  cursor: pointer;
  color: var(--blue-600);
`;

function SignupForm({ onSubmit }) {
  const handleSubmit = (event) => {
    event.preventDefault();

    onSubmit();
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Input label='Display name' type='text' />
        <Input label='Email' type='email' />
        <Input label='Password' type='password' />
        <FormCaption>
          Passwords must contain at least eight characters, including at least 1
          letter and 1 number.
        </FormCaption>
        <Button type='submit'>Sign up</Button>
      </Form>
      <Policy>
        By clicking “Sign up”, you agree to our{' '}
        <PolicyLink href='https://stackoverflow.com/legal/terms-of-service/public'>
          terms of service
        </PolicyLink>
        ,{' '}
        <PolicyLink href='https://stackoverflow.com/legal/privacy-policy'>
          privacy policy
        </PolicyLink>{' '}
        and{' '}
        <PolicyLink href='https://stackoverflow.com/legal/cookie-policy'>
          cookie policy
        </PolicyLink>
      </Policy>
    </Container>
  );
}

export default SignupForm;

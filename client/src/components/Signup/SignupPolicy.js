import styled from 'styled-components';

const Policy = styled.div`
  text-align: left;
  color: var(--fc-light);
  font-size: 12px;
`;

const PolicyLink = styled.a`
  cursor: pointer;
  color: var(--blue-600);
`;

function SignupPolicy() {
  return (
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
  );
}

export default SignupPolicy;

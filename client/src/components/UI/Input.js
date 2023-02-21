import styled from 'styled-components';

const Container = styled.fieldset`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 6px;
  border: 0;
  width: 100%;
`;

const Label = styled.label`
  font-weight: 600;
  font-size: 1rem;
  color: var(--fc-dark);

  :active {
    color: var(--blue-500);
  }
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 0.6em 0.7em;
  border: 1px solid var(--black-200);
  border-radius: 3px;
  background-color: var(--white);
  color: hsl(210, 8%, 5%);
  font-size: 13px;
`;

function Input({ label, placeholder, type = 'text' }) {
  return (
    <Container>
      <Label>{label}</Label>
      <StyledInput placeholder={placeholder} type={type} />
    </Container>
  );
}

export default Input;

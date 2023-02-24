import styled from 'styled-components';
import Label from './Label';
import SubLabel from './SubLabel';

const Container = styled.fieldset`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 6px;
  border: 0;
  width: 100%;
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

function Input({ label, subLabel, type = 'text', ...props }) {
  return (
    <Container>
      <Label>{label}</Label>
      {subLabel?.length > 0 && <SubLabel>{subLabel}</SubLabel>}
      <StyledInput type={type} {...props} />
    </Container>
  );
}

export default Input;

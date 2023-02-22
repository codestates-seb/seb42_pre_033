import styled from 'styled-components';

const StyledLabel = styled.label`
  font-weight: 600;
  font-size: 1rem;
  color: var(--fc-dark);
`;

function Label({ children, ...props }) {
  return <StyledLabel {...props}>{children}</StyledLabel>;
}

export default Label;

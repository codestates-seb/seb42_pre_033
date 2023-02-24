import styled from 'styled-components';

const StyledSubLabel = styled.label`
  font-size: 12px;
  color: var(--fc-medium);
`;

function SubLabel({ children, props }) {
  return <StyledSubLabel {...props}>{children}</StyledSubLabel>;
}

export default SubLabel;

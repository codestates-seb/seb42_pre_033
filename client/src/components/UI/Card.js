import styled from 'styled-components';

export const StyledCard = styled.div`
  border-radius: 7px;
  box-shadow: 0 10px 24px hsla(0, 0%, 0%, 0.05),
    0 20px 48px hsla(0, 0%, 0%, 0.05), 0 1px 4px hsla(0, 0%, 0%, 0.1);
  padding: 24px;
  background-color: var(--white);
`;

function Card({ children, ...props }) {
  return <StyledCard {...props}>{children}</StyledCard>;
}

export default Card;

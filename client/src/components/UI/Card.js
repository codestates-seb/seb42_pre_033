import styled, { css } from 'styled-components';

const VARIANTS = {
  primary: css`
    --card-bg-color: var(--white);
    --card-border-color: var(--white);
  `,
  secondary: css`
    --card-bg-color: var(--white);
    --card-border-color: var(--black-075);
  `,

  warning: css`
    --card-bg-color: var(--yellow-050);
    --card-border-color: var(--yellow-300);
  `,
};

export const StyledCard = styled.div`
  ${({ variant }) => VARIANTS[variant]}

  border-radius: 7px;
  box-shadow: 0 10px 24px hsla(0, 0%, 0%, 0.05),
    0 20px 48px hsla(0, 0%, 0%, 0.05), 0 1px 4px hsla(0, 0%, 0%, 0.1);
  padding: 24px;
  background-color: var(--card-bg-color);
  border: 1px solid var(--card-border-color);
`;

function Card({ variant = 'primary', children, ...props }) {
  return (
    <StyledCard variant={variant} {...props}>
      {children}
    </StyledCard>
  );
}

export default Card;

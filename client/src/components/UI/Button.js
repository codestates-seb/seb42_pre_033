import styled, { css } from 'styled-components';

const VARIANTS = {
  primary: css`
    --btn-color: var(--white);
    --btn-bg-color: var(--blue-500);
    --btn-border-color: var(--powder-500);
    --btn-hover-bg-color: var(--blue-600);
    --btn-box-shadow: inset 0 1px 0 0 hsla(0, 0%, 100%, 0.4);
  `,

  secondary: css`
    --btn-color: var(--powder-700);
    --btn-bg-color: var(--powder-100);
    --btn-border-color: var(--powder-500);
    --btn-hover-bg-color: var(--powder-300);
    --btn-box-shadow: inset 0 1px 0 0 hsla(0, 0%, 100%, 0.7);
  `,
  tertiary: css`
    --btn-color: var(--blue-600);
    --btn-bg-color: var(--white);
    --btn-border-color: var(--blue-400);
    --btn-hover-bg-color: var(--blue-050);
    --btn-box-shadow: none;
  `,
  text: css`
    --btn-color: var(--black);
    --btn-bg-color: var(--white);
    --btn-border-color: none;
    --btn-hover-bg-color: var(--white);
    --btn-box-shadow: none;
  `,
};

const StyledButton = styled.button`
  ${({ variant }) => VARIANTS[variant]}

  font-size: 13px;
  height: 32px;
  padding: 10px;
  line-height: 0;
  border-radius: 3px;
  color: var(--btn-color);
  background-color: var(--btn-bg-color);
  border: 1px solid var(--btn-border-color);
  box-shadow: var(--btn-box-shadow);

  &:hover {
    background-color: var(--btn-hover-bg-color);
  }
`;

function Button({ variant = 'primary', children, ...props }) {
  return (
    <StyledButton variant={variant} {...props}>
      {children}
    </StyledButton>
  );
}

export default Button;

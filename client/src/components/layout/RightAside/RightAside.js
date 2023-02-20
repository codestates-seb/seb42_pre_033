import styled, { css } from 'styled-components';
import Button from '../../UI/Button';

const COLOR = {
  yellow: css`
    --aside-bg-color: var(--yellow-050);
    --aside-border-color: var(--yellow-200);
    --aside-header-bg-color: var(--yellow-100);
    --aside-header-border-color: var(--yellow-200);
  `,
  gray: css`
    --aside-bg-color: var(--white);
    --aside-border-color: var(--black-100);
    --aside-header-bg-color: var(--black-025);
    --aside-header-border-color: var(--black-100);
    --aside-header-button-color: var(--black-100);
  `,
};

const Container = styled.aside`
  ${({ color }) => COLOR[color]}

  background-color: var(--aside-bg-color);
  width: 300px;
  border: 1px solid var(--aside-border-color);
  font-size: var(--fs-body1);
  position: relative;
  font-size: 13px;
  box-shadow: 0 1px 2px hsla(0, 0%, 0%, 0.05), 0 1px 4px hsla(0, 0%, 0%, 0.05),
    0 2px 8px hsla(0, 0%, 0%, 0.05);
`;

const Header = styled.div`
  width: 100%;
  display: flex;
  background-color: var(--aside-header-bg-color);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  padding: 12px 15px;
  border-top: 1px solid var(--aside-header-border-color);
  border-bottom: 1px solid var(--aside-header-border-color);
`;

const Title = styled.h2`
  ${({ color }) => COLOR[color]}

  flex: 1 1 0;
  font-size: 12px;
  font-weight: bold;
`;

const HeadButton = styled(Button)`
  color: var(--blue-600);
  background-color: var(--aside-header-bg-color);
  padding: 0;
`;

const List = styled.ul`
  display: block;
`;

function RightAside({ color, title, headbuttonText = '', children, ...props }) {
  return (
    <Container color={color} {...props}>
      <Container>
        <Header>
          <Title color={color}>{title}</Title>
          {headbuttonText.length > 0 && (
            <HeadButton variant='text' as='a'>
              {headbuttonText}
            </HeadButton>
          )}
        </Header>
        <List>{children}</List>
      </Container>
    </Container>
  );
}

export default RightAside;

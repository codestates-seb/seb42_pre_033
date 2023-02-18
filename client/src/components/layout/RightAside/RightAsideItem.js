import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  margin: 12px 0;
  padding: 0 16px;
  font-size: 13px;
  gap: 12px;
`;

const Icon = styled.img`
  flex: 0 0 14px;
  width: 14px;
  height: 14px;
`;

const ContentContainer = styled.div`
  flex: 1 1 0;
  display: flex;
  flex-direction: column;
`;

const Content = styled.a`
  color: var(--black-700);
  font-weight: 400;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  overflow-wrap: break-word;
`;

const SubContent = styled.span``;

function RightAsideItem({ icon, content, subcontent }) {
  return (
    <Container>
      <Icon src={icon} alt='' />
      <ContentContainer>
        <Content> {content} </Content>
        <SubContent>{subcontent}</SubContent>
      </ContentContainer>
    </Container>
  );
}

export default RightAsideItem;

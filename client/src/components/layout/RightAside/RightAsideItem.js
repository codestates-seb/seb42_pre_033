import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  margin: 12px 0;
  padding: 0 16px;
  font-size: 13px;
  gap: 12px;
`;

const IconWrapper = styled.div`
  flex: 0 0 16px;
  width: 16px;
  height: 16px;
  overflow: hidden;
  position: relative;
`;

const Icon = styled.img`
  position: absolute;
  top: 0px;
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
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  overflow-wrap: break-word;
`;

const SubContent = styled.span``;

function RightAsideItem({ icon, content, subcontent }) {
  return (
    <Container>
      <IconWrapper>
        <Icon src={icon} alt='' />
      </IconWrapper>
      <ContentContainer>
        <Content> {content} </Content>
        <SubContent>{subcontent}</SubContent>
      </ContentContainer>
    </Container>
  );
}

export default RightAsideItem;

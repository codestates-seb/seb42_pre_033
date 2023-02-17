import styled from 'styled-components';

const Container = styled.div``;

const Icon = styled.img``;

const Content = styled.a``;

const SubContent = styled.sapn``;

function RightAsideListItem({ icon, content, subcotent }) {
  return (
    <Container>
      <Icon src={icon} alt='' />
      <Content> {content} </Content>
      <SubContent>{subcotent}</SubContent>
    </Container>
  );
}

export default RightAsideListItem;

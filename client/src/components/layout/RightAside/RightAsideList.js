import styled from 'styled-components';
import RightAsideListItem from './RightAsideListItem';

const Container = styled.div``;

const Title = styled.h2``;

const List = styled.ul``;

function RightAsideList({ title, contentList }) {
  return (
    <Container>
      <Title>{title}</Title>
      <List>
        {' '}
        {contentList.map(({ icon, content, subcontent }) => {
          return (
            <RightAsideListItem
              key={content}
              icon={icon}
              content={content}
              subcontent={subcontent}
            />
          );
        })}
      </List>
    </Container>
  );
}

export default RightAsideList;

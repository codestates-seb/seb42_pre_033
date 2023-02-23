import styled from 'styled-components';
import Card from '../UI/Card';

const NoticeCard = styled(Card)`
  padding: 16px;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Content = styled.p`
  font-size: 13px;
`;

function QuestionEditNotice() {
  return (
    <NoticeCard variant='warning'>
      <Content>
        Your edit will be placed in a queue until it is peer reviewed.
      </Content>
      <Content>
        We welcome edits that make the post easier to understand and more
        valuable for readers. Because community members review edits, please try
        to make the post substantially better than how you found it, for
        example, by fixing grammar or adding additional resources and
        hyperlinks.
      </Content>
    </NoticeCard>
  );
}

export default QuestionEditNotice;

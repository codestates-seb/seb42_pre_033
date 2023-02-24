import styled from 'styled-components';
import RightAside from '../layout/RightAside/RightAside';

const QuestionsEditAside = styled(RightAside)`
  min-width: 300px;
  max-height: 220px;
  list-style-type: disc;
  list-style-position: inside;

  ul {
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding: 8px 0 0 32px;
  }

  @media (max-width: 1024px) {
    display: none;
  }
`;

const Item = styled.li`
  list-style-type: disc;
`;

function QuestionEditGuide({ guides }) {
  return (
    <QuestionsEditAside title='How to Edit' color='yellow'>
      {guides.map((guide) => (
        <Item key={guide}>{guide}</Item>
      ))}
    </QuestionsEditAside>
  );
}

export default QuestionEditGuide;

import styled from 'styled-components';
import QuestionEditFrom from '../components/QuestionEdit/QuestionEditFrom';
import QuestionEditGuide from '../components/QuestionEdit/QuestionEditGuide';

const Article = styled.article`
  display: flex;
  width: 100%;
  padding: 16px;
  gap: 24px;
`;

const GUIDE_DUMY = [
  'Correct minor typos or mistakes',
  'Clarify meaning without changing it',
  'Add related resources or links',
  'Always respect the author’s intent',
  'Don’t use edits to reply to the author',
];

function QuestionEditPage() {
  const { title, body, tags } = {
    title: '가나다라마바사아자마카마니아아아아아아아아',
    body: '가나다라마바사아자마카마니아아아아아아아아',
    tags: [],
  };

  return (
    <Article>
      <QuestionEditFrom title={title} body={body} tags={tags} />
      <QuestionEditGuide guides={GUIDE_DUMY} />
    </Article>
  );
}

export default QuestionEditPage;

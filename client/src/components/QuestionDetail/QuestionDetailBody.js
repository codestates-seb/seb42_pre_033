import styled from 'styled-components';
import DOMPurify from 'dompurify';
import QuestionDetailBottom from './QuestionDetailBottom';
import Tags from '../Tags/Tags';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 8px 0;
  gap: 16px;
  padding: 16px;
`;

const Content = styled.div`
  text-align: left;
  width: 100%;
  font-size: 15px;
  line-height: 22.5px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  min-height: 175px;

  pre {
    background-color: hsl(0, 0%, 96.5%);
    border-radius: 5px;
    color: var(--black-750);
    font-size: 13px;
    line-height: 17px;
    max-height: 600px;
    overflow: auto;
    padding: 12px;
    width: auto;
  }
`;

function QuestionDetailBody({
  content,
  tags = [],
  displayEditButton,
  nickname,
}) {
  if (!content) {
    return '';
  }
  function createMarkup() {
    return {
      __html: DOMPurify.sanitize(
        content.replaceAll('&lt;', '<').replaceAll('&gt;', '>'),
      ),
    };
  }

  return (
    <Container>
      <Content dangerouslySetInnerHTML={createMarkup()} />
      {tags.length > 0 && <Tags tags={tags} />}
      <QuestionDetailBottom
        name={nickname}
        avator=''
        displayEditButton={displayEditButton}
      />
    </Container>
  );
}

export default QuestionDetailBody;

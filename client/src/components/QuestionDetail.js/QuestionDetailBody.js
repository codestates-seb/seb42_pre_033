import styled from 'styled-components';
import DOMPurify from 'dompurify';
import Button from '../UI/Button';
import QuestionDetailBottom from './QuestionDetailBottom';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 8px 0;
  gap: 16px;
`;

const Content = styled.div`
  text-align: left;
  width: 100%;
  font-size: 15px;
  line-height: 22.5px;
  display: flex;
  flex-direction: column;
  gap: 16px;

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

const TagContainer = styled.div``;

const TagList = styled.ul`
  display: flex;
  justify-content: flex-start;
  gap: 8px;
`;

const Tag = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 12px;
`;

const TagButton = styled(Button)`
  display: inline-block;
  padding: 4.8px 6px;
  line-height: 1;
  white-space: nowrap;
  text-decoration: none;
  text-align: center;
  border: 1px solid transparent;
  height: unset;
`;

function QuestionDetailBody({ content, tags, displayEditButton }) {
  function createMarkup() {
    return { __html: DOMPurify.sanitize(content) };
  }

  return (
    <Container>
      <Content dangerouslySetInnerHTML={createMarkup()} />
      <TagContainer>
        {' '}
        {tags?.length > 0 && (
          <TagList>
            {tags.map(({ tag, url }) => (
              <Tag key={tag}>
                <TagButton variant='filter' href={url} tag='a'>
                  {tag}
                </TagButton>
              </Tag>
            ))}
          </TagList>
        )}
      </TagContainer>
      <QuestionDetailBottom
        name='정정수'
        avator=''
        displayEditButton={displayEditButton}
      />
    </Container>
  );
}

export default QuestionDetailBody;

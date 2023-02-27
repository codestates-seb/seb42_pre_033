import { useState } from 'react';
import styled from 'styled-components';
import CommentForm from '../Comment/CommentForm';
import QuestionDeatilAnswerHeader from './QuestionDeatilAnswerHeader';
import QuestionDetailBody from './QuestionDetailBody';
import QuestionDetailLeft from './QuestionDetailLeft';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  flex: 1 1 0;
`;

const Container = styled.div`
  display: flex;
  gap: 16px;
`;

function QuestionDetail({
  question,
  answers,
  onVoteUp,
  onVoteDown,
  onCommentSubmit,
}) {
  const [sortedOption, setSortedOption] = useState('modifieddesc');

  const handleChange = (option) => {
    setSortedOption(option);
  };

  return (
    <Wrapper>
      <Container>
        <QuestionDetailLeft
          vote='3'
          onVoteUp={onVoteUp}
          onVoteDown={onVoteDown}
        />
        <QuestionDetailBody tags={question?.tags} content={question?.content} />
      </Container>
      <QuestionDeatilAnswerHeader
        AnswerConunt='1'
        defaultValue='modifieddesc'
        value={sortedOption}
        onChange={handleChange}
      />
      {answers.map(({ tags, content }, index) => (
        <Container key={index}>
          <QuestionDetailLeft
            vote='3'
            handleUp={onVoteUp}
            handleDown={onVoteDown}
          />
          <QuestionDetailBody tags={tags} content={content} displayEditButton />
        </Container>
      ))}
      <CommentForm onSubmit={onCommentSubmit} />
    </Wrapper>
  );
}

export default QuestionDetail;

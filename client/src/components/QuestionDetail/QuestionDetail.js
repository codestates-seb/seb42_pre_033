import { useState } from 'react';
import styled from 'styled-components';
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

function QuestionDetail({ question, answers, onVoteUp, onVoteDown }) {
  const [sortedOption, setSortedOption] = useState('modifieddesc');

  const handleChange = (option) => {
    setSortedOption(option);
  };
  console.log('question.content', answers);

  return (
    <Wrapper>
      <Container>
        <QuestionDetailLeft
          vote={question.score}
          onVoteUp={onVoteUp}
          onVoteDown={onVoteDown}
        />
        <QuestionDetailBody
          nickname={question.nickname}
          tags={[]}
          content={question.content}
        />
      </Container>
      <QuestionDeatilAnswerHeader
        AnswerConunt={answers.length}
        defaultValue='modifieddesc'
        value={sortedOption}
        onChange={handleChange}
      />
      {answers.map(({ answerId, answerContent, score }) => (
        <Container key={answerId}>
          <QuestionDetailLeft
            vote={score}
            handleUp={onVoteUp}
            handleDown={onVoteDown}
          />
          <QuestionDetailBody
            tags={[]}
            content={answerContent}
            displayEditButton
          />
        </Container>
      ))}
    </Wrapper>
  );
}

export default QuestionDetail;

import { Fragment } from 'react';
import styled from 'styled-components';
import QuestionDetailBody from './QuestionDetailBody';
import QuestionDetailLeft from './QuestionDetailLeft';

const Container = styled.div`
  display: flex;
  gap: 16px;
`;
const Borderline = styled.div`
  content: '';
  width: 95%;
  box-shadow: 0px 1px 1px 1px var(--black-100);
  margin: 16px;
`;

function QuestionDetail({ question, onVoteUp, onVoteDown }) {
  console.log(question);
  return (
    <Fragment>
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
      <Borderline></Borderline>
    </Fragment>
  );
}

export default QuestionDetail;

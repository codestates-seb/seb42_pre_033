import Quetions from '../components/Quetions/Quetions';
import MainHeader from '../components/layout/Main/MainHeader';
import styled from 'styled-components';
import { QUESTIONS } from '../components/QuestionDummy/QuestionDummy';

const QuestionWrapper = styled.section`
  background-color: var(--white);
  margin-left: -3px;
  width: 780px;
`;

function HomePage() {
  const { questionlist } = QUESTIONS;

  return (
    <QuestionWrapper>
      <MainHeader />
      <Quetions questionlist={questionlist} />
    </QuestionWrapper>
  );
}

export default HomePage;

import Quetions from '../components/Quetions/Quetions';
import MainHeader from '../components/layout/Main/MainHeader';
import styled from 'styled-components';
import { QUESTIONS } from '../components/QuestionDummy/QuestionDummy';
import { useState, useEffect } from 'react';
import axios from 'axios';

const QuestionWrapper = styled.section`
  background-color: var(--white);
  margin-left: -3px;
  width: 780px;
`;

function HomePage() {
  const { questionlist } = QUESTIONS;
  const [questions, setQuestions] = useState([]);

  const BASE_URL = '/api';

  useEffect(() => {
    axios
      .get(`${BASE_URL}/questions?page=1&size=10`, {
        headers: { 'ngrok-skip-browser-warning': '12' },
      })
      .then((response) => {
        setQuestions(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <QuestionWrapper>
      <MainHeader />
      <Quetions questionlist={questionlist} questions={questions} />
    </QuestionWrapper>
  );
}

export default HomePage;

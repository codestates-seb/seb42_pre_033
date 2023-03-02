import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ProfileContent = styled.section`
  width: 835px;
  padding: 8px;
  margin-bottom: 30px;
`;

const ProfileTitle = styled.h3`
  width: 835px;
  padding-bottom: 16px;
  margin-bottom: 24px;
  font-size: 27px;
  border-bottom: 1px solid var(--black-200);
`;

const CategoryTitle = styled.h4`
  font-size: 21px;
  padding-bottom: 15px;
`;

const Aboutme = styled.div`
  font-size: 15px;
  color: var(--black-700);
`;

const AboutWrap = styled.div`
  margin-bottom: 50px;
`;
const AnswersWrap = styled.div`
  margin-bottom: 50px;
  border: 1px solid var(--black-100);
  border-radius: 5px;
  width: 620px;
  height: 250px;
  overflow: hidden;
`;

const QuestionsWrap = styled.div`
  margin-bottom: 50px;
  border: 1px solid var(--black-100);
  border-radius: 5px;
  width: 620px;
  height: 250px;
  overflow: hidden;
`;

const Wrapper = styled.div`
  height: auto;
  padding: 10px;
  border-bottom: 1px solid var(--black-100);
  :nth-of-type(5) {
    border: none;
  }
`;

const Answers = styled.ul`
  display: flex;
  justify-content: space-between;
`;
const Questions = styled.ul`
  display: flex;
  justify-content: space-between;
`;

const Votes = styled.li`
  font-size: 13px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  background-color: var(--green-400);
  border: 1px solid transparent;
  border-radius: 3px;
  color: var(--white);
  padding: 5px;
`;

const Title = styled.li`
  width: 400px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding: 5px;
  cursor: pointer;
  color: var(--blue);
  :hover {
    text-decoration: underline;
  }
`;

const Date = styled.li`
  font-size: 13px;
  color: var(--black-500);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  padding: 5px;
`;

const NoContents = styled.li`
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px;
  color: var(--black-500);
  height: 250px;
`;

const ContentLink = styled.div`
  margin: 10px 0;
  padding: 0 5px;
  color: var(--blue-600);
`;

function UserProfileContent({ users, answers, questions }) {
  const formattedQuestions = questions.map((question) => {
    const date = new window.Date(question.createDate);
    return {
      ...question,
      dateObject: date,
    };
  });
  const formattedAnswers = answers.map((answer) => {
    const date = new window.Date(answer.createDate);
    return {
      ...answer,
      dateObject: date,
    };
  });
  function getMonthString(month) {
    const monthNames = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ];
    return monthNames[month];
  }
  return (
    <ProfileContent>
      <ProfileTitle>Profile</ProfileTitle>
      <CategoryTitle>About</CategoryTitle>
      <AboutWrap>
        {users.map(({ id, aboutme }) => (
          <Aboutme key={id}>
            <p>{aboutme}</p>
          </Aboutme>
        ))}
      </AboutWrap>
      <CategoryTitle>Answers</CategoryTitle>
      <AnswersWrap>
        <div>
          {answers && answers.length > 0 ? (
            formattedAnswers.map((answer) => (
              <Wrapper key={answer.answerId}>
                <Answers>
                  <Votes>{answer.score}</Votes>
                  <Link to={`/question/${answer.answerId}`}>
                    <Title>{answer.questionTitle}</Title>
                  </Link>
                  <Date>
                    {getMonthString(answer.dateObject.getMonth())}{' '}
                    {answer.dateObject.getDate()},{' '}
                    {answer.dateObject.getFullYear()}
                  </Date>
                </Answers>
              </Wrapper>
            ))
          ) : (
            <ul>
              <NoContents>
                You have not
                <Link to='/'>
                  <ContentLink>answered</ContentLink>
                </Link>
                any questions
              </NoContents>
            </ul>
          )}
        </div>
      </AnswersWrap>
      <CategoryTitle>Questions</CategoryTitle>
      <QuestionsWrap>
        <div>
          {questions && questions.length > 0 ? (
            formattedQuestions.map((question) => (
              <Wrapper key={question.questionId}>
                <Questions>
                  <Votes>{question.score}</Votes>
                  <Link to={`/question/${question.questionId}`}>
                    <Title>{question.title}</Title>
                  </Link>
                  <Date>
                    {getMonthString(question.dateObject.getMonth())}{' '}
                    {question.dateObject.getDate()},{' '}
                    {question.dateObject.getFullYear()}
                  </Date>
                </Questions>
              </Wrapper>
            ))
          ) : (
            <ul>
              <NoContents>
                You have not{' '}
                <Link to='/question/ask'>
                  <ContentLink>asked</ContentLink>
                </Link>{' '}
                any questions
              </NoContents>
            </ul>
          )}
        </div>
      </QuestionsWrap>
    </ProfileContent>
  );
}
export default UserProfileContent;

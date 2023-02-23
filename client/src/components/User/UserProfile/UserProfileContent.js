import styled from 'styled-components';

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
`;

const QuestionsWrap = styled.div`
  margin-bottom: 50px;
  border: 1px solid var(--black-100);
  border-radius: 5px;
  width: 620px;
`;

const Wrapper = styled.div`
  height: 50px;
  padding: 10px;
  border-bottom: 1px solid var(--black-100);
  :last-of-type {
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

function UserProfileContent({ users, answers, questions }) {
  console.log(users);
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
        {answers.map(({ id, votes, title, date }) => (
          <Wrapper key={id}>
            <Answers>
              <Votes>{votes}</Votes>
              <Title>{title}</Title>
              <Date>{date}</Date>
            </Answers>
          </Wrapper>
        ))}
      </AnswersWrap>
      <CategoryTitle>Questions</CategoryTitle>
      <QuestionsWrap>
        {questions.map(({ id, votes, title, date }) => (
          <Wrapper key={id}>
            <Questions>
              <Votes>{votes}</Votes>
              <Title>{title}</Title>
              <Date>{date}</Date>
            </Questions>
          </Wrapper>
        ))}
      </QuestionsWrap>
    </ProfileContent>
  );
}
export default UserProfileContent;

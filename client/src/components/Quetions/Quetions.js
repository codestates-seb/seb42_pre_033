import styled from 'styled-components';

const QuestionList = styled.section`
  padding: 16px;
  border-bottom: 1px solid var(--black-075);
`;

const QusetionBox = styled.div`
  height: auto;
  color: var(--black-700);
`;

const QuestionMain = styled.div`
  display: flex;
`;

const NumberPannel = styled.div`
  width: 108px;
  height: 140px;
  padding-top: 5px;
  margin: 0 16px 4px 0;
  font-size: 13px;
  text-align: right;
  font-weight: 500;
`;

const BodyPart = styled.div`
  width: auto;
`;

const Main = styled.div`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  overflow-wrap: break-word;
`;

const Votes = styled.div`
  width: 108px;
  margin-bottom: 12px;
`;

const VotesText = styled.span`
  font-weight: normal;
`;

const Answers = styled.div`
  width: 108px;
  margin-bottom: 12px;
  color: var(--black-500);
`;

const AnswersText = styled.span`
  font-weight: normal;
`;

const Views = styled.div`
  width: 108px;
  margin-bottom: 12px;
  color: var(--yellow-900);
`;

const ViewsText = styled.span`
  font-weight: normal;
`;

const Title = styled.div`
  color: var(--blue-700);
  font-size: 17px;
  line-height: 23px;
  padding: 0 24px 0 0;
  margin-bottom: 5px;
  :hover {
    cursor: pointer;
    color: var(--blue-500);
  }
`;

const Body = styled.div`
  font-size: 13px;
  margin: 0px 8px -2px 0px;
  line-height: 17px;
  color: var(--black-700);
`;

const Tags = styled.div`
  display: flex;
  justify-content: flex-start;
  font-size: 12px;
  margin-top: 10px;
`;

const Taglist = styled.p`
  background-color: var(--powder-200);
  color: var(--powder-700);
  margin-right: 5px;
  padding: 4.8px 6px;
  border: 1px solid transparent;
  border-radius: 4px;
  :hover {
    background-color: var(--powder-300);
    cursor: pointer;
  }
`;

const Personal = styled.div`
  display: flex;
  justify-content: flex-end;
  font-size: 12px;
  margin-top: 20px;
  color: var(--black-500);
  align-items: center;
`;

const ProfileImg = styled.img`
  width: 18px;
  height: 18px;
  margin-right: 5px;
  vertical-align: middle;
`;
const Username = styled.div`
  margin-right: 5px;
  color: var(--blue-600);

  :hover {
    cursor: pointer;
    color: var(--blue-500);
  }
`;
const Asked = styled.div`
  font-weight: 700;
  margin-right: 5px;
`;

const AskedText = styled.span`
  font-weight: normal;
  margin-left: 5px;
`;

const Date = styled.div`
  margin-right: 5px;
`;
const Time = styled.div``;

function Quetions({ questionlist }) {
  return (
    <section>
      {questionlist.map(
        ({
          id,
          title,
          body,
          tags,
          votes,
          answers,
          views,
          profileImg,
          username,
          asked,
          date,
          time,
        }) => (
          <QuestionList key={id}>
            <QusetionBox>
              <QuestionMain>
                <NumberPannel>
                  <Votes>
                    {votes} <VotesText>votes</VotesText>
                  </Votes>
                  <Answers>
                    {answers} <AnswersText>answers</AnswersText>
                  </Answers>
                  <Views>
                    {views} <ViewsText>view</ViewsText>
                  </Views>
                </NumberPannel>
                <BodyPart>
                  <Title>{title}</Title>
                  <Main>
                    <Body>{body}</Body>
                  </Main>
                  <Tags>
                    {tags.map((taglist) => (
                      <Taglist key={taglist}>{taglist}</Taglist>
                    ))}
                  </Tags>
                  <Personal>
                    <ProfileImg
                      src={profileImg}
                      alt={`${username}'s profile image'`}
                    />
                    <Username>{username}</Username>
                    <Asked>
                      {asked}
                      <AskedText>asked</AskedText>{' '}
                    </Asked>
                    <Date>{date}</Date>
                    <Time>at {time}</Time>
                  </Personal>
                </BodyPart>
              </QuestionMain>
            </QusetionBox>
          </QuestionList>
        ),
      )}
    </section>
  );
}

export default Quetions;

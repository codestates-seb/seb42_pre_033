import styled from 'styled-components';

const Header = styled.section`
  padding: 16px;
  width: 100%;
  height: 100px;
  background: url('https://cdn.sstatic.net/Img/ask/background.svg?v=2e9a8205b368');
  background-repeat: no-repeat;
  background-position: right bottom;
`;

const TitleContainer = styled.div`
  width: 300px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-color: var(--white);
`;

const Title = styled.h1`
  font-weight: 600;
  font-size: 27px;
  line-height: 1.3;
  text-align: center;
`;

function QuestionAskHeadr() {
  return (
    <Header>
      <TitleContainer>
        <Title>Ask a public question</Title>
      </TitleContainer>
    </Header>
  );
}

export default QuestionAskHeadr;

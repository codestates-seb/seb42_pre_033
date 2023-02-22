import { useState } from 'react';
import styled from 'styled-components';
import Editor from '../Editor/Editor';
import Button from '../UI/Button';
import Card from '../UI/Card';
import Input from '../UI/Input';
import Label from '../UI/Label';
import SubLabel from '../UI/SubLabel';
import AskQuetionNotice from './AskQuestionNotice';

const Container = styled.article`
  display: flex;
  flex-direction: column;
  width: 70%;
  gap: 20px;
`;

const Header = styled.div`
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

const EditorCard = styled(Card)`
  height: 400px;
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 16px;
`;

const PostButton = styled(Button)`
  height: 40px;
`;

const DraftButton = styled(Button)`
  height: 40px;
  background-color: inherit;
  color: var(--red-600);

  :hover {
    background-color: var(--red-050);
  }
`;

function AskQuestion() {
  const [contents, setContents] = useState('');
  console.log(contents);

  return (
    <Container>
      <Header>
        <TitleContainer>
          <Title>Ask a public question</Title>
        </TitleContainer>
      </Header>
      <AskQuetionNotice />
      <Card variant='secondary'>
        <Input
          label='Title'
          subLabel='Be specific and imagine you’re asking a question to another person.'
        />
      </Card>

      <EditorCard variant='secondary'>
        <Label>What are the details of your problem?</Label>
        <SubLabel>
          Introduce the problem and expand on what you put in the title. Minimum
          20 characters.
        </SubLabel>
        <Editor height='calc(100% - 20px)' onChange={setContents} />
      </EditorCard>

      <EditorCard variant='secondary'>
        <Label>What did you try and what were you expecting?</Label>
        <SubLabel>
          Describe what you tried, what you expected to happen, and what
          actually resulted. Minimum 20 characters.
        </SubLabel>
        <Editor height='calc(100% - 20px)' onChange={setContents} />
      </EditorCard>
      <ButtonContainer>
        <PostButton>Post youre question</PostButton>
        <DraftButton variant='text'>Discard draft</DraftButton>
      </ButtonContainer>
    </Container>
  );
}

export default AskQuestion;

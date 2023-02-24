import { useState } from 'react';
import styled from 'styled-components';
import useInput from '../../hooks/useInput';

import Editor from '../Editor/Editor';
import Button from '../UI/Button';
import Card from '../UI/Card';
import Input from '../UI/Input';
import Label from '../UI/Label';
import SubLabel from '../UI/SubLabel';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 20px;
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

function QuestionAskForm({ onSubmit }) {
  const [title, onChange, reset] = useInput('');
  const [body, setBody] = useState('');

  const handleChangeBody = (newBody) => {
    setBody(newBody);
  };

  const handleSumbit = (event) => {
    event.preventDefault();

    onSubmit({ title, body });
    setBody('');
    reset();
  };

  return (
    <Form onSubmit={handleSumbit}>
      <Card variant='secondary'>
        <Input
          value={title}
          name='title'
          label='Title'
          subLabel='Be specific and imagine you’re asking a question to another person.'
          onChange={onChange}
        />
      </Card>

      <EditorCard variant='secondary'>
        <Label>What are the details of your problem?</Label>
        <SubLabel>
          Introduce the problem and expand on what you put in the title. Minimum
          20 characters.
        </SubLabel>
        <Editor
          value={body}
          name='body'
          height='calc(100% - 20px)'
          onChange={handleChangeBody}
        />
      </EditorCard>
      <ButtonContainer onClick={onSubmit}>
        <PostButton>Post youre question</PostButton>
        <DraftButton variant='text'>Discard draft</DraftButton>
      </ButtonContainer>
    </Form>
  );
}

export default QuestionAskForm;

import { useState } from 'react';
import styled from 'styled-components';
import useInput from '../../hooks/useInput';
import Editor from '../Editor/Editor';
import Button from '../UI/Button';
import Input from '../UI/Input';
import Label from '../UI/Label';
import QuestionEditNotice from './QuestionEditNotice';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 8px;
`;

const CancelButton = styled(Button)`
  border: 0;
`;

const EditContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

function QuestionEditFrom({
  initTitle,
  initContent,
  tags = [],
  onSubmit,
  onCancel,
}) {
  const [title, onChange] = useInput(initTitle);
  const [content, setContent] = useState(initContent);

  const handleSubmit = (event) => {
    event.preventDefault();

    onSubmit({ title, content });
  };
  const handleCancelClick = () => {
    onCancel();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <QuestionEditNotice />
      <Input name='title' label='Title' value={title} onChange={onChange} />
      <EditContainer>
        <Label>content</Label>
        <Editor name='content' value={content} onChange={setContent} />
      </EditContainer>
      {tags.lenght > 0 && <Input label='Tags' value={content} />}
      <Input
        label='Edit Summary'
        value={tags}
        onChange={(e) => console.log(e.value)}
      />
      <ButtonContainer>
        <Button type='submit'>Save Edit</Button>
        <CancelButton onClick={handleCancelClick} variant='tertiary'>
          Cancel
        </CancelButton>
      </ButtonContainer>
    </Form>
  );
}

export default QuestionEditFrom;

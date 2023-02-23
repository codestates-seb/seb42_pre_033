import styled from 'styled-components';
import Editor from '../Editor/Editor';
import Button from '../UI/Button';
import Input from '../UI/Input';
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

function QuestionEditFrom({ title, body, tags = [], onSubmit, onCancel }) {
  const handleSubmit = () => {
    onSubmit();
  };

  const handleCancelClick = () => {
    onCancel();
  };

  const handleChange = (value) => {
    console.log(value);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <QuestionEditNotice />
      <Input
        label='Title'
        value={title}
        onChange={(e) => handleChange(e.value)}
      />
      <Editor value={body} onChange={(value) => handleChange(value)} />
      {tags.lenght > 0 && <Input label='Tags' value={body} />}
      <Input
        label='Edit Summary'
        value={tags}
        onChange={(e) => handleChange(e.value)}
      />
      <ButtonContainer>
        <Button>Save Edit</Button>
        <CancelButton onClick={handleCancelClick} variant='tertiary'>
          Cancel
        </CancelButton>
      </ButtonContainer>
    </Form>
  );
}

export default QuestionEditFrom;

import { useState } from 'react';
import styled from 'styled-components';

import Editor from '../Editor/Editor';
import Button from '../UI/Button';

const Form = styled.form``;

const PostButton = styled(Button)`
  margin: 0 0 32px 0;
  width: 140px;
  height: 36px;
  line-height: 15px;
`;

function CommentForm({ onSubmit }) {
  const [value, setValue] = useState();

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  const handleSubmit = () => {
    onSubmit(value);
    setValue('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Editor onChange={handleChange} value={value} />
      <PostButton type='submit'>Post Youre Answer</PostButton>
    </Form>
  );
}

export default CommentForm;

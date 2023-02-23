import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import styled from 'styled-components';

const QuilEditor = styled(ReactQuill)`
  width: 600px;
  height: 300px;
`;

function QuilTest({ placeholder = '입력을 해주세요' }) {
  const [input, setInput] = useState('');

  const handleChange = (value) => {
    setInput(value);
  };

  return (
    <div>
      <QuilEditor
        placeholder={placeholder}
        theme='snow'
        value={input}
        onChange={handleChange}
      />
      <div dangerouslySetInnerHTML={{ __html: input }} />
    </div>
  );
}

export default QuilTest;

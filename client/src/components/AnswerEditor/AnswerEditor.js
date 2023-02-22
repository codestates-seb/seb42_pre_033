import { useMemo, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import hljs from 'highlight.js';
import 'highlight.js/styles/github.css';
import styled from 'styled-components';
import Button from '../UI/Button';

const PostButton = styled(Button)`
  margin: 40px 0 32px 0;
  width: 140px;
  height: 36px;
  line-height: 15px;
`;

const StyledEditor = styled(ReactQuill)`
  height: 300px;
`;

hljs.configure({
  languages: ['javascript', 'ruby', 'python', 'rust'],
});

function AnswerEditor({ placeholder = '입력을 해주세요' }) {
  const [input, setInput] = useState('');

  const handleChange = (value) => {
    console.log(value);

    setInput(value);
  };

  const handleClick = () => {};

  const modules = useMemo(() => {
    return {
      syntax: {
        highlight: (text) => hljs.highlightAuto(text).value,
      },
      toolbar: [
        [{ header: [1, 2, false] }],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [
          { list: 'ordered' },
          { list: 'bullet' },
          { indent: '-1' },
          { indent: '+1' },
        ],
        ['link', 'image'],
        ['clean'],
        ['code-block'],
      ],
    };
  }, []);

  const formats = [
    'header',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'bullet',
    'indent',
    'link',
    'image',
    'code-block',
  ];

  return (
    <>
      <StyledEditor
        placeholder={placeholder}
        theme='snow'
        value={input}
        onChange={handleChange}
        modules={modules}
        format={formats}
      />
      <PostButton onClick={handleClick}>Post Youre Answer</PostButton>
    </>
  );
}

export default AnswerEditor;

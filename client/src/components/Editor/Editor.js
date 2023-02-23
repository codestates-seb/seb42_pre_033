import { useEffect, useMemo, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import hljs from 'highlight.js';
import 'highlight.js/styles/github.css';
import styled from 'styled-components';

const StyledEditor = styled(ReactQuill)`
  height: ${({ editorHeight }) => editorHeight};

  .ql-container {
    max-height: calc(100% - 64px);
    overflow: auto;
  }
`;

hljs.configure({
  languages: ['javascript', 'ruby', 'python', 'rust'],
});

function Editor({
  onChange,
  editorHeight = '300px',
  placeholder = '입력을 해주세요',
  ...props
}) {
  const [input, setInput] = useState('');

  const handleChange = (value) => {
    console.log(value);

    setInput(value);
  };

  useEffect(() => {
    onChange(input);
  }, [input]);

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
    <StyledEditor
      placeholder={placeholder}
      theme='snow'
      value={input}
      onChange={handleChange}
      modules={modules}
      format={formats}
      editorHeight={editorHeight}
      {...props}
    />
  );
}

export default Editor;

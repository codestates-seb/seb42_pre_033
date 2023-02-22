import { useState } from 'react';
import styled from 'styled-components';
import AnswerEditor from '../AnswerEditor/AnswerEditor';
import QuestionDeatilAnswerHeader from './QuestionDeatilAnswerHeader';
import QuestionDetailBody from './QuestionDetailBody';
import QuestionDetailLeft from './QuestionDetailLeft';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  flex: 1 1 0;
`;

const Container = styled.div`
  display: flex;
  gap: 16px;
`;

function QuestionDetail({ onVoteUp, onVoteDown }) {
  const [sortedOption, setSortedOption] = useState('modifieddesc');
  console.log(sortedOption);

  const handleChange = (option) => {
    setSortedOption(option);
  };

  return (
    <Wrapper>
      <Container>
        <QuestionDetailLeft
          vote='3'
          handleUp={onVoteUp}
          handleDown={onVoteDown}
        />
        <QuestionDetailBody
          tags={[
            { tag: 'javscript', url: '/' },
            { tag: 'java', url: '/' },
          ]}
          content='&lt;p&gt;정정수&lt;/p&gt;&lt;pre&gt;&lt;code class="language-plaintext"&gt;function &lt;/code&gt;&lt;/pre&gt;'
        />
      </Container>
      <QuestionDeatilAnswerHeader
        AnswerConunt='1'
        defaultValue='modifieddesc'
        value={sortedOption}
        onChange={handleChange}
      />
      <Container>
        <QuestionDetailLeft
          vote='3'
          handleUp={onVoteUp}
          handleDown={onVoteDown}
        />
        <QuestionDetailBody
          tags={[
            { tag: 'javscript', url: '/' },
            { tag: 'java', url: '/' },
          ]}
          content='&lt;p&gt;정정수&lt;/p&gt;&lt;pre&gt;&lt;code class="language-plaintext"&gt;function &lt;/code&gt;&lt;/pre&gt;'
          displayEditButton
        />
      </Container>
      <Container>
        <QuestionDetailLeft
          vote='3'
          handleUp={onVoteUp}
          handleDown={onVoteDown}
        />
        <QuestionDetailBody
          tags={[
            { tag: 'javscript', url: '/' },
            { tag: 'java', url: '/' },
          ]}
          content='&lt;p&gt;정정수&lt;/p&gt;&lt;pre&gt;&lt;code class="language-plaintext"&gt;function &lt;/code&gt;&lt;/pre&gt;'
          displayEditButton
        />
      </Container>
      <AnswerEditor />
    </Wrapper>
  );
}

export default QuestionDetail;
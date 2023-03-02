import { Fragment, useState } from 'react';
import QuestionDetail from './QuestionDetail';
import QuestionDeatilAnswerHeader from './QuestionDeatilAnswerHeader';

function QeustionDetailAnswer({ answers, onVoteUp, onVoteDown }) {
  const [sortedOption, setSortedOption] = useState('modifieddesc');

  const handleChange = (option) => {
    setSortedOption(option);
  };

  return (
    <Fragment>
      <QuestionDeatilAnswerHeader
        AnswerConunt={answers.length}
        defaultValue='modifieddesc'
        value={sortedOption}
        onChange={handleChange}
      />
      {answers.map(({ answerId, answerContent, score, memberNickname }) => (
        <QuestionDetail
          key={answerId}
          question={{
            tags: [],
            content: answerContent,
            score: score,
            nickname: memberNickname,
          }}
          onVoteUp={onVoteUp}
          onVoteDown={onVoteDown}
        />
      ))}
    </Fragment>
  );
}

export default QeustionDetailAnswer;

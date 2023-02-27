import styled from 'styled-components';
import MainHeader from '../components/layout/Main/MainHeader';
import QuestionDetail from '../components/QuestionDetail/QuestionDetail';
import QuestionDetailInfo from '../components/QuestionDetail/QuestionDetailInfo';
import useAxios from '../hooks/useAxios';
import AsideRight from './AsideRight';

const Article = styled.article`
  display: flex;
  flex-direction: column;
  max-width: 1264px;
  width: 100%;
  padding: 16px;
  gap: 3px;
`;

const Container = styled.div`
  display: flex;
  gap: 16px;
`;

const QUESTION_DUMY = {
  info: {
    date: '2019-01-09T15:25:59',
    updateDate: '2019-01-09T15:25:59',
    viewed: '46126',
  },
  tags: [
    { tag: 'javscript', url: '/' },
    { tag: 'java', url: '/' },
  ],
  content:
    '&lt;p&gt;정정수&lt;/p&gt;&lt;pre&gt;&lt;code class="language-plaintext"&gt;function &lt;/code&gt;&lt;/pre&gt;',
};

const ANSWERs_DUMY = [
  {
    tags: [
      { tag: 'javscript', url: '/' },
      { tag: 'java', url: '/' },
    ],
    content:
      '&lt;p&gt;정정수&lt;/p&gt;&lt;pre&gt;&lt;code class="language-plaintext"&gt;function &lt;/code&gt;&lt;/pre&gt;',
  },
  {
    tags: [
      { tag: 'javscript', url: '/' },
      { tag: 'java', url: '/' },
    ],
    content:
      '&lt;p&gt;정정수&lt;/p&gt;&lt;pre&gt;&lt;code class="language-plaintext"&gt;function &lt;/code&gt;&lt;/pre&gt;',
  },
  {
    tags: [
      { tag: 'javscript', url: '/' },
      { tag: 'java', url: '/' },
    ],
    content:
      '&lt;p&gt;정정수&lt;/p&gt;&lt;pre&gt;&lt;code class="language-plaintext"&gt;function &lt;/code&gt;&lt;/pre&gt;',
  },
];

// questionId: number;
// title: string;
// content: string;
// score: number;
// viewCnt: string;
// profileImg: string;
// nickname: string;
// asked: string;
// createDate: string;
function QuestionDetailPage() {
  const [question, loading, error] = useAxios({
    url: '/questions/1',
    method: 'get',
  });

  const onVoteUp = (id) => {
    console.log(id);
  };

  const onVoteDown = (id) => {
    console.log(id);
  };

  return (
    <Article>
      <MainHeader displayDataController={false} />
      {error && error.message}
      {loading ? (
        <div>로딩중</div>
      ) : (
        <>
          <QuestionDetailInfo
            date={question.createDate}
            updateDate={question.createDate}
            viewed={question.viewCnt}
          />
          <Container>
            <QuestionDetail
              question={{
                tags: QUESTION_DUMY.tags,
                content: question.content,
              }}
              answers={ANSWERs_DUMY}
              onVoteUp={onVoteUp}
              onVoteDown={onVoteDown}
            />
            <AsideRight />
          </Container>
        </>
      )}
    </Article>
  );
}

export default QuestionDetailPage;

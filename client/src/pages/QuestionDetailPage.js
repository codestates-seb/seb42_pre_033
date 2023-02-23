import styled from 'styled-components';
import MainHeader from '../components/layout/Main/MainHeader';
import QuestionDetail from '../components/QuestionDetail/QuestionDetail';
import QuestionDetailInfo from '../components/QuestionDetail/QuestionDetailInfo';
import AsideRight from './AsideRight';

const Article = styled.article`
  display: flex;
  flex-direction: column;
  max-width: 1264px;
  width: 1080px;
  padding: 16px;
  gap: 3px;
`;

const Container = styled.div`
  display: flex;
  gap: 16px;
`;

function QuestionDetailPage() {
  return (
    <Article>
      <MainHeader displayDataController={false} />
      <QuestionDetailInfo
        date='2019-01-09T15:25:59'
        updateDate='2019-01-09T15:25:59'
        viewed='46126'
      />
      <Container>
        <QuestionDetail />
        <AsideRight />
      </Container>
    </Article>
  );
}

export default QuestionDetailPage;

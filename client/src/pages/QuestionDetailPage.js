import styled from 'styled-components';
import AsideLeft from '../components/layout/AsideLeft';
import Footer from '../components/layout/Footer';
import Main from '../components/layout/Main/Main';
import MainHeader from '../components/layout/Main/MainHeader';
import QuestionDetail from '../components/QuestionDetail.js/QuestionDetail';
import QuestionDetailInfo from '../components/QuestionDetail.js/QuestionDetailInfo';
import AsideRight from './AsideRight';

const Wrapper = styled.section`
  width: 100%;
  display: flex;
`;

const Article = styled.article`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 32px;
  gap: 3px;
`;

const Container = styled.div`
  display: flex;
  gap: 16px;
`;

const DUMY_DATA = {
  title: '질문입니다 질문',
  data: '',
};

function QuestionDetailPage() {
  return (
    <>
      <Main>
        <Wrapper>
          <AsideLeft />
          <Article>
            <MainHeader title={DUMY_DATA.title} displayDataController={false} />
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
        </Wrapper>
      </Main>

      <Footer />
    </>
  );
}

export default QuestionDetailPage;

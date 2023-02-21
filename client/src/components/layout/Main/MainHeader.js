import styled from 'styled-components';
import Button from '../../UI/Button';

const Section = styled.div`
  padding: 24px;
  min-height: 105px;
`;

const MainHeaderWrapper = styled.div`
  flex: 1 0 400px;
`;

const MainTitle = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
`;

const Title = styled.h2`
  font-size: 1.61538462rem;
`;

const DataController = styled.div`
  height: 35px;
  display: flex;
  justify-content: start;
`;

const QuestionNum = styled.div`
  width: 252px;
  line-height: 33px;
  font-size: 16px;
`;

const CategoryNav = styled.div`
  color: var(--black-500);
  font-size: 12px;
  display: flex;
  flex-direction: row;
  border: 1px solid var(--black-400);
  border-radius: 3px;
  margin-right: 16px;
  .selected {
    background-color: var(--black-100);
    color: var(--black-700);
  }
`;

const Tab = styled.div`
  padding: 10px 10.6px;
  line-height: 13px;
  cursor: pointer;
  :not(:last-child) {
    border-right: 1px solid var(--black-400);
  }
  :hover {
    background-color: var(--black-025);
  }
`;

const Badge = styled.span`
  font-size: 11px;
  padding: 0 5px;
  border-radius: 3px;
  background-color: var(--blue-600);
  color: var(--white);
`;
const DownArrow = styled.span`
  font-size: 10px;
  margin: 0 1px;
`;

const FilterIcon = styled.svg`
  margin-top: -0.3em;
  margin-bottom: -0.3em;
`;

function MainHeader({ displayDataController = true }) {
  return (
    <Section>
      <MainHeaderWrapper>
        <MainTitle>
          <Title>All Questions</Title>
          <Button variant='question'>Ask Question</Button>
        </MainTitle>
        {displayDataController && (
          <DataController>
            <QuestionNum>23,505,622 questions</QuestionNum>
            <CategoryNav>
              <Tab className='selected'>Newest</Tab>
              <Tab>Active</Tab>
              <Tab>
                Bountied <Badge> 291</Badge>
              </Tab>
              <Tab>Unanswered</Tab>
              <Tab>
                More <DownArrow>▼</DownArrow>
              </Tab>
            </CategoryNav>
            <Button variant='filter'>
              <FilterIcon
                fill='hsl(205,47%,42%)'
                aria-hidden='true'
                width='18'
                height='18'
                viewBox='0 0 18 18'
              >
                <path d='M2 4h14v2H2V4Zm2 4h10v2H4V8Zm8 4H6v2h6v-2Z'></path>
              </FilterIcon>
              Filter
            </Button>
          </DataController>
        )}
      </MainHeaderWrapper>
    </Section>
  );
}

export default MainHeader;

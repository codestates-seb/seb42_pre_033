import styled from 'styled-components';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

const QuestionInfo = styled.section`
  display: flex;
`;

const List = styled.ul`
  display: flex;
  gap: 16px;
  font-size: 13px;
`;

const Item = styled.li`
  display: flex;
  gap: 2px;
`;

const Text = styled.span`
  color: var(--fc-light);
`;

const Time = styled.time`
  vertical-align: baseline;
  white-space: nowrap;
  text-align: left;
`;

function QuestionDetailInfo({ date, updateDate, viewed }) {
  dayjs.extend(relativeTime);
  const displayDate = dayjs(date).fromNow();
  const displayUpdateDate = dayjs(updateDate).fromNow();

  return (
    <>
      <QuestionInfo>
        <List>
          <Item>
            <Text>Asked</Text>
            <Time datetime={date}>{displayDate}</Time>
          </Item>
          <Item>
            <Text>Modified</Text>
            <Time datetime={updateDate}>{displayUpdateDate}</Time>
          </Item>
          <Item>
            <Text>Viewed</Text>
            {viewed}
          </Item>
        </List>
      </QuestionInfo>
      <hr />
    </>
  );
}

export default QuestionDetailInfo;

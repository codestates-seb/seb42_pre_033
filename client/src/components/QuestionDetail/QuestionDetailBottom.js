import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  width: 100%;
  padding: 8px 0;
  gap: 16px;
  margin-top: 16px;
`;

const ButtonList = styled.div`
  flex: 1 1 0;
  display: flex;
  gap: 6px;
`;

const BottomButton = styled.a`
  height: unset;
  background-color: inherit;
  color: var(--black-500);
  border: 0;
  font-size: 13px;
`;

const UserInfo = styled.div`
  padding: 6px;
  font-size: 12px;
  color: var(--black-500);
  display: flex;
  gap: 6px;
  min-width: 160px;
`;

const UserAvator = styled.img`
  width: 32px;
  height: 32px;
`;

const UserInfoDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const UserInfoName = styled.span`
  color: var(--blue-600);
`;

const UserInfoScoreContainer = styled.div`
  display: flex;
  gap: 3px;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const UserInfoReputationScore = styled.span`
  font-weight: bold;
`;

const UserInfoBage = styled.span`
  height: 6px;
  width: 6px;
  border-radius: 50%;
  background-color: ${({ color }) =>
    color === 'gold' ? '#D1A684' : '#b4b8bc'};
`;

const UserInfoBageNumber = styled.span``;

function QuestionDetailBottom({ name, avator, displayEditButton }) {
  return (
    <Container>
      <ButtonList>
        <BottomButton tag='a'>Share</BottomButton>
        <BottomButton tag='a'>Follow</BottomButton>
        {displayEditButton && <BottomButton>edit</BottomButton>}
      </ButtonList>
      <UserInfo>
        <UserAvator alt='' src={avator} />
        <UserInfoDetails>
          <UserInfoName>{name}</UserInfoName>
          <UserInfoScoreContainer>
            <UserInfoReputationScore>200</UserInfoReputationScore>
            <UserInfoBage color='silver' />
            <UserInfoBageNumber>32</UserInfoBageNumber>
            <UserInfoBage color='gold' />
            <UserInfoBageNumber>32</UserInfoBageNumber>
          </UserInfoScoreContainer>
        </UserInfoDetails>
      </UserInfo>
    </Container>
  );
}

export default QuestionDetailBottom;

import styled from 'styled-components';
import Button from '../../UI/Button';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
  font-size: 13px;
  gap: 6px;

  border-top: 1px solid var(--black-075);
`;

const Head = styled.div`
  display: flex;
  gap: 12px;
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Icon = styled.img`
  flex: 0 0 14px;
  width: 32px;
  height: 32px;
  font-size: 13px;
`;

const CompannyInfo = styled.div`
  flex: 1 1 0;
  display: flex;
  flex-direction: column;
`;

const ConmmpayName = styled.h3`
  font-size: 15px;
  color: var(--black-500);
`;

const ConmmpayMember = styled.div`
  font-size: 12px;
`;

const HeadButton = styled(Button)`
  width: 40px;
  height: 32px;
  font-size: 12px;
  padding: 0;
`;

const Description = styled.p`
  color: var(--black-700);
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  overflow-wrap: break-word;
`;

function RightAsideCollectivesItem({ icon, company, descrition, members }) {
  return (
    <Container>
      <Head>
        <IconContainer>
          <Icon src={icon} alt={`${company} icon`} />
        </IconContainer>
        <CompannyInfo>
          <ConmmpayName> {company}</ConmmpayName>
          <ConmmpayMember>{members} Members</ConmmpayMember>
        </CompannyInfo>
        <HeadButton variant='tertiary'>Join</HeadButton>
      </Head>
      <Description>{descrition}</Description>
    </Container>
  );
}

export default RightAsideCollectivesItem;

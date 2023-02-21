import { USERS } from './UserDummy';
import styled from 'styled-components';

const Name = styled.h2`
  font-size: 2.07692308rem;
`;

const Title = styled.h3`
  font-size: 1.46153846rem;
  color: var(--black-500);
`;
const RowWrapper = styled.div``;
const Member = styled.p``;
const Seen = styled.p``;
const Visited = styled.p``;
const Location = styled.p``;
function UserInfos() {
  return (
    <div>
      {USERS.map(({ users }) =>
        users.map(({ name, id, title, member, seen, visited, location }) => (
          <div key={id}>
            <Name>{name}</Name>
            <Title>{title}</Title>
            <RowWrapper>
              <Member>Member for {member} days</Member>
              <Seen>Last seen in {seen}</Seen>
              <Visited>Visited {visited} days</Visited>
            </RowWrapper>
            <Location>{location}</Location>
          </div>
        )),
      )}
    </div>
  );
}

export default UserInfos;

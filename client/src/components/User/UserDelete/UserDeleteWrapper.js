import styled from 'styled-components';
import UserHeader from '../UserHeader';

const UserDeleteMain = styled.section`
  width: 1100px;
  height: auto;
  padding: 24px;
`;

const DelteTitle = styled.h3``;

function UserDeleteWrapper() {
  return (
    <UserDeleteMain>
      <UserHeader />
      <DelteTitle>Delete</DelteTitle>
    </UserDeleteMain>
  );
}

export default UserDeleteWrapper;

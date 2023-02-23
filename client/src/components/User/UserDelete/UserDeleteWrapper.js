import styled from 'styled-components';
import UserHeader from '../UserHeader';
import UserDeleteContent from './UserDeleteContent';

const UserDeleteMain = styled.section`
  width: 1100px;
  height: 932px;
  padding: 24px;
`;

function UserDeleteWrapper() {
  return (
    <UserDeleteMain>
      <UserHeader />
      <UserDeleteContent />
    </UserDeleteMain>
  );
}

export default UserDeleteWrapper;

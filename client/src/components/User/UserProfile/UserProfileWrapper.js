import styled from 'styled-components';
import UserHeader from '../UserHeader';
import UserProfileContent from './UserProfileContent';

const UserMain = styled.section`
  width: 1100px;
  height: auto;
  padding: 24px;
`;

function UserWrapper() {
  return (
    <UserMain>
      <UserHeader />
      <UserProfileContent />
    </UserMain>
  );
}

export default UserWrapper;

import UserEditHeader from './UserEditHeader';
import styled from 'styled-components';
import UserEditContent from './UserEditContent';

const UserEditMain = styled.section`
  width: 1100px;
  height: auto;
  padding: 24px;
`;

function UserEditWrapper() {
  return (
    <UserEditMain>
      <UserEditHeader />
      <UserEditContent />
    </UserEditMain>
  );
}

export default UserEditWrapper;

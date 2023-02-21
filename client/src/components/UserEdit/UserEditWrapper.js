import UserEditHeader from './UserEditHeader';
import styled from 'styled-components';

const UserEditMain = styled.div`
  width: 1100px;
  height: auto;
  background-color: pink;
  padding: 24px;
`;

function UserEditWrapper() {
  return (
    <UserEditMain>
      <UserEditHeader />
    </UserEditMain>
  );
}

export default UserEditWrapper;

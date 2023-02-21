import UserEditHeader from './UserEditHeader';
import styled from 'styled-components';
import UserEditMiddleWrapper from './UserEditMiddleWrapper';

const UserEditMain = styled.div`
  width: 1100px;
  height: auto;
  padding: 24px;
`;

function UserEditWrapper() {
  return (
    <UserEditMain>
      <UserEditHeader />
      <UserEditMiddleWrapper />
    </UserEditMain>
  );
}

export default UserEditWrapper;

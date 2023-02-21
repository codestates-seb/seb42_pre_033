import styled from 'styled-components';
import UserEditContent from './UserEditContent';
import UserEditMenu from './UserEditMenu';

const UserEditMainWrapper = styled.div`
  display: flex;
`;

function UserEditMiddleWrapper() {
  return (
    <UserEditMainWrapper>
      <UserEditMenu />
      <UserEditContent />
    </UserEditMainWrapper>
  );
}

export default UserEditMiddleWrapper;

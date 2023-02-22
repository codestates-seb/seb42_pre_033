import styled from 'styled-components';
import UserHeader from '../UserHeader';

const UserMain = styled.section`
  width: 1100px;
  height: auto;
  padding: 24px;
`;

function UserWrapper() {
  return (
    <UserMain>
      <UserHeader />
    </UserMain>
  );
}

export default UserWrapper;

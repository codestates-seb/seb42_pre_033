import styled from 'styled-components';
import { USERS } from '../components/User/UserDummy';
import UserHeader from '../components/User/UserHeader';
import UserDeleteContent from '../components/User/UserDelete/UserDeleteContent';

const UserDeleteMain = styled.section`
  width: 1100px;
  height: 932px;
  padding: 24px;
`;

function UserDeletePage() {
  const { users } = USERS;
  return (
    <UserDeleteMain>
      <UserHeader users={users} />
      <UserDeleteContent />
    </UserDeleteMain>
  );
}

export default UserDeletePage;

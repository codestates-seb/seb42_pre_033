import styled from 'styled-components';
import { USERS } from '../components/User/UserDummy';
import UserHeader from '../components/User/UserHeader';
import UserEditContent from '../components/User/UserEdit/UserEditContent';

const UserMain = styled.section`
  width: 1100px;
  height: auto;
  padding: 24px;
`;

function UserEditPage() {
  const { users, questions, answers } = USERS;

  return (
    <UserMain>
      <UserHeader users={users} />
      <UserEditContent users={users} questions={questions} answers={answers} />
    </UserMain>
  );
}

export default UserEditPage;

import styled from 'styled-components';
import { USERS } from '../components/User/UserDummy';
import UserHeader from '../components/User/UserHeader';
import UserProfileContent from '../components/User/UserProfile/UserProfileContent';

const UserMain = styled.section`
  width: 1100px;
  height: auto;
  padding: 24px;
`;

function UserProfilePage() {
  const { users, questions, answers } = USERS;

  return (
    <UserMain>
      <UserHeader users={users} />
      <UserProfileContent
        users={users}
        questions={questions}
        answers={answers}
      />
    </UserMain>
  );
}

export default UserProfilePage;

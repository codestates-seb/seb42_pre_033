import styled from 'styled-components';
import { USERS } from '../components/User/UserDummy';
import UserHeader from '../components/User/UserHeader';
import UserDeleteContent from '../components/User/UserDelete/UserDeleteContent';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const UserDeleteMain = styled.section`
  width: 1100px;
  height: 932px;
  padding: 24px;
`;

function UserDeletePage() {
  const { users } = USERS;

  const BASE_URL = 'http://localhost:3000/';
  const navigate = useNavigate();

  const deleteUser = () => {
    axios
      .delete(`${BASE_URL}/members`)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        alert('회원 탈퇴가 완료되었습니다.');
        navigate('/');
      })
      .catch((error) => {
        console.error('Error', error);
        alert('회원 탈퇴를 진행할 수 없습니다.');
      });
  };

  return (
    <UserDeleteMain>
      <UserHeader users={users} />
      <UserDeleteContent deleteUser={deleteUser} />
    </UserDeleteMain>
  );
}

export default UserDeletePage;

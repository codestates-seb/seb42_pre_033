import styled from 'styled-components';
import { USERS } from '../components/User/UserDummy';
import UserHeader from '../components/User/UserHeader';
import UserDeleteContent from '../components/User/UserDelete/UserDeleteContent';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useAuthContext } from '../hooks/useAuthContext';

const UserDeleteMain = styled.section`
  width: 1100px;
  height: 932px;
  padding: 24px;
`;

function UserDeletePage() {
  const { users } = USERS;
  const { accessToken, refreshToken, logout } = useAuthContext();
  const navigate = useNavigate();

  const [userData, setUserData] = useState([]);

  useEffect(() => {
    axios({
      method: 'get',
      url: `https://b8fd-125-177-118-22.jp.ngrok.io/members/mypage`,
      headers: {
        'ngrok-skip-browser-warning': '12',
        authorization: accessToken,
        refresh: refreshToken,
      },
    })
      .then((response) => {
        setUserData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const deleteUser = () => {
    axios({
      method: 'delete',
      url: `https://b8fd-125-177-118-22.jp.ngrok.io/members`,
      headers: {
        authorization: accessToken,
        refresh: refreshToken,
      },
    })
      .then((response) => {
        console.log(response.data);
        alert('회원 탈퇴가 완료되었습니다.');
        logout();
        navigate('/');
      })
      .catch((error) => {
        console.error('Error', error);
        alert('회원 탈퇴를 진행할 수 없습니다.');
      });
  };

  return (
    <div>
      {userData.length === 0 ? (
        <div>로딩중</div>
      ) : (
        <UserDeleteMain>
          <UserHeader
            users={users}
            nickname={userData.data.memberInfo.nickname}
          />
          <UserDeleteContent deleteUser={deleteUser} />
        </UserDeleteMain>
      )}
    </div>
  );
}

export default UserDeletePage;

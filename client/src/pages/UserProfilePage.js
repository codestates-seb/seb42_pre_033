import styled from 'styled-components';
import { USERS } from '../components/User/UserDummy';
import UserHeader from '../components/User/UserHeader';
import UserProfileContent from '../components/User/UserProfile/UserProfileContent';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useAuthContext } from '../hooks/useAuthContext';

const UserMain = styled.section`
  width: 1100px;
  height: auto;
  padding: 24px;
`;

function UserProfilePage() {
  const { users } = USERS;
  const { accessToken, refreshToken } = useAuthContext();
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

  return (
    <div>
      {userData.length === 0 ? (
        <div>로딩중</div>
      ) : (
        <UserMain>
          <UserHeader
            users={users}
            nickname={userData.data.memberInfo.nickname}
          />
          <UserProfileContent
            users={users}
            userData={userData}
            answers={userData.data.answerResponseDtos}
            questions={userData.data.questionResponseDtos}
          />
        </UserMain>
      )}
    </div>
  );
}

export default UserProfilePage;

import styled from 'styled-components';
import UserTab from './UserTab';
import UserInfos from '../User/UserInfos';

const UserEditProfile = styled.div`
  width: 1050px;
  height: 148px;
  box-sizing: inherit;
  margin-bottom: 16px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  list-style: none;
  position: relative;
`;

const UserPicture = styled.div`
  width: 128px;
  height: 128px;
  border-radius: 5px;
  box-shadow: 0 1px 2px hsla(0, 0%, 0%, 0.05), 0 1px 4px hsla(0, 0%, 0%, 0.05),
    0 2px 8px hsla(0, 0%, 0%, 0.05);
  margin: 8px;
`;

const UserImg = styled.img`
  border-radius: 5px;
`;

const UserInfo = styled.div`
  margin-left: 8px;
`;

function UserHeader() {
  return (
    <section>
      <UserEditProfile>
        <UserPicture>
          <UserImg src='/image/profile.png' alt='유저 프로필 사진' />
        </UserPicture>
        <UserInfo>
          <UserInfos />
        </UserInfo>
      </UserEditProfile>
      <UserTab />
    </section>
  );
}

export default UserHeader;

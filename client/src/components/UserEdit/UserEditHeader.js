import styled from 'styled-components';
import Button from '../UI/Button';
import UserEditTab from './UserEditTab';
import UserInfos from './UserInfos';

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

const ButtonWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 30px;
`;

const Text = styled.span`
  vertical-align: 4px;
`;

const EditIcon = styled.svg`
  margin-right: 3px;
`;

function UserEditHeader() {
  return (
    <section>
      <UserEditProfile>
        <UserPicture>
          <UserImg src='/image/profile.png' alt='유저 프로필 사진' />
        </UserPicture>
        <UserInfo>
          <UserInfos />
        </UserInfo>
        <ButtonWrapper>
          <Button variant='edit'>
            <EditIcon
              fill='var(--black-500)'
              aria-hidden='true'
              className='svg-icon iconPencil'
              width='18'
              height='18'
              viewBox='0 0 18 18'
            >
              <path d='m13.68 2.15 2.17 2.17c.2.2.2.51 0 .71L14.5 6.39l-2.88-2.88 1.35-1.36c.2-.2.51-.2.71 0ZM2 13.13l8.5-8.5 2.88 2.88-8.5 8.5H2v-2.88Z'></path>
            </EditIcon>
            <Text>Edit Profile</Text>
          </Button>
        </ButtonWrapper>
      </UserEditProfile>
      <UserEditTab />
    </section>
  );
}

export default UserEditHeader;

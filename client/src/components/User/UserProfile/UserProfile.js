import styled from 'styled-components';
import Footer from '../../layout/Footer';
import AsideLeft from '../../layout/AsideLeft';
import UserProfileWrapper from './UserProfileWrapper';

const UserComponent = styled.div`
  width: 1264px;
  height: auto;
  margin: 0 auto;
  display: flex;
`;

function UserProfile() {
  return (
    <div>
      <UserComponent>
        <AsideLeft />
        <UserProfileWrapper />
      </UserComponent>
      <Footer />
    </div>
  );
}

export default UserProfile;

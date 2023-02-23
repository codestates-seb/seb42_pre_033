import styled from 'styled-components';
import Footer from '../../layout/Footer';
import AsideLeft from '../../layout/AsideLeft';
import UserWrapper from './UserWrapper';

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
        <UserWrapper />
      </UserComponent>
      <Footer />
    </div>
  );
}

export default UserProfile;

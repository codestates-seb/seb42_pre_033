import styled from 'styled-components';
import Footer from '../../layout/Footer';
import AsideLeft from '../../layout/AsideLeft';
import UserDeleteWrapper from './UserDeleteWrapper';

const UserDeleteComponent = styled.div`
  width: 1264px;
  height: auto;
  margin: 0 auto;
  display: flex;
`;

function UserDelete() {
  return (
    <div>
      <UserDeleteComponent>
        <AsideLeft />
        <UserDeleteWrapper />
      </UserDeleteComponent>
      <Footer />
    </div>
  );
}

export default UserDelete;

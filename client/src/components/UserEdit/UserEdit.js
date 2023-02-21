import styled from 'styled-components';
import Footer from '../layout/Footer';
import UserEditWrapper from './UserEditWrapper';
import AsideLeft from '../layout/AsideLeft';

const UserEditComponent = styled.div`
  width: 1264px;
  height: auto;
  margin: 0 auto;
  display: flex;
`;

function UserEdit() {
  return (
    <div>
      <UserEditComponent>
        <AsideLeft />
        <UserEditWrapper />
      </UserEditComponent>
      <Footer />
    </div>
  );
}

export default UserEdit;

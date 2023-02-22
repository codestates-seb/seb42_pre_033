import styled from 'styled-components';

const Tab = styled.ul`
  width: 150px;
  height: 29px;
  margin-bottom: 8px;
  display: flex;
  justify-content: space-s;
  align-items: center;
  color: var(--black-600);

  .selected {
    background-color: var(--orange);
    color: var(--white);
    border-radius: 1000px;

    :hover {
      background-color: var(--orange-600);
    }
  }
`;
const TabList = styled.li`
  padding: 7px 13px;
  border-radius: 4px;
  font-size: 13px;
  margin-right: 10px;
  cursor: pointer;
  :hover {
    background-color: var(--black-075);
    border-radius: 1000px;
  }
`;

function UserEditTab() {
  return (
    <Tab>
      <TabList>Profile</TabList>
      <TabList className='selected'>Edit</TabList>
      <TabList>Delete</TabList>
    </Tab>
  );
}

export default UserEditTab;

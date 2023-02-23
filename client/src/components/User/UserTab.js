import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Tab = styled.ul`
  width: 220px;
  height: 29px;
  margin-bottom: 8px;
  color: var(--black-600);
  display: flex;
  flex-wrap: nowrap;
`;
/* const TabList = styled.div``; */
const LinkStyle = styled.li`
  display: inline-block;
  width: 60px;
  height: 29px;
  line-height: 29px;
  border-radius: 1000px;
  font-size: 13px;
  text-align: center;
  margin-right: 5px;
  cursor: pointer;
  :hover {
    background-color: var(--black-075);
    border-radius: 1000px;
  }
  background-color: var(--white);
  .selected {
    width: 60px;
    height: 29px;
    line-height: 29px;
    text-align: center;
    border-radius: 1000px;
    display: block;
    background-color: var(--orange-400);
    color: var(--white);
  }
`;

const Test = styled.div``;

function UserTab() {
  return (
    <Tab>
      <LinkStyle>
        <NavLink
          className={({ isActive }) => (isActive ? 'selected' : '')}
          to='/users/profile'
        >
          <Test>Profile</Test>
        </NavLink>
      </LinkStyle>
      <LinkStyle>
        <NavLink
          className={({ isActive }) => (isActive ? 'selected' : '')}
          to='/users/edit'
        >
          Edit
        </NavLink>
      </LinkStyle>
      <LinkStyle>
        <NavLink
          className={({ isActive }) => (isActive ? 'selected' : '')}
          to='/users/delete'
        >
          Delete
        </NavLink>
      </LinkStyle>
    </Tab>
  );
}

export default UserTab;

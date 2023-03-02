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

const LinkStyle = styled.li`
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

const Test = styled.div`
  display: inline-block;
  width: 60px;
  height: 29px;
  border-radius: 1000px;
`;

function UserTab() {
  return (
    <Tab>
      <LinkStyle>
        <NavLink
          end
          className={({ isActive }) => (isActive ? 'selected' : '')}
          to='/users'
        >
          <Test>Profile</Test>
        </NavLink>
      </LinkStyle>
      <LinkStyle>
        <NavLink
          className={({ isActive }) => (isActive ? 'selected' : '')}
          to='/users/edit'
        >
          <Test>Edit</Test>
        </NavLink>
      </LinkStyle>
      <LinkStyle>
        <NavLink
          className={({ isActive }) => (isActive ? 'selected' : '')}
          to='/users/delete'
        >
          <Test>Delete</Test>
        </NavLink>
      </LinkStyle>
    </Tab>
  );
}

export default UserTab;

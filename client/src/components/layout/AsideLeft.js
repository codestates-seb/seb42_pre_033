import styled from 'styled-components';
import { FaGlobeAmericas } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const LeftAside = styled.aside`
  width: 163px;
  height: auto;
  padding-top: 24px;
  padding-left: 8px;
  border-right: 1px solid var(--black-075);
`;

const LeftSidebar = styled.div`
  position: sticky;
  top: 50px;
  width: 164px;
`;

const SideNav = styled.ol`
  font-size: 13px;
`;
const NavListTitle = styled.li`
  margin-top: 10px;
  padding: 8px;
  color: var(--black-500);
  font-size: 11px;
`;
const NavList = styled.li`
  font-size: 13px;
  height: 34px;
  padding: 8px;
  cursor: pointer;
  color: var(--black-600);
  :hover {
    color: var(--black);
  }

  .globe {
    color: var(--black-400);
    font-size: 16px;
    vertical-align: -2px;
    margin-right: 5px;
  }
`;

const LinkStyle = styled.div`
  .selected {
    display: block;
    width: 156px;
    height: 32px;
    font-weight: bold;
    color: var(--black-900);
    background-color: var(--black-050);
    border-right: 3px solid var(--orange-400);
    cursor: pointer;
  }
`;

const NavListInsert = styled.li`
  font-size: 13px;
  height: 34px;
  padding: 8px 0px 0px 30px;
  cursor: pointer;
  color: var(--black-600);
  :hover {
    color: var(--black);
  }
`;

const Category = styled.ul`
  height: auto;
  width: 163px;
  margin-left: -9px;
`;

const InfoIcon = styled.span`
  vertical-align: -3px;
  display: inline-block;
  width: 68px;
  text-align: right;
`;

const InfoIconT = styled.span`
  vertical-align: -3px;
  display: inline-block;
  width: 105px;
  text-align: right;
`;

const StarIcon = styled.span`
  vertical-align: -4px;
  margin-right: 6px;
`;

const NavListTeam = styled.li`
  display: flex;
  font-size: 13px;
  height: 34px;

  padding: 8px 0px 0px 8px;
  cursor: pointer;
  color: var(--black-600);
  :hover {
    color: var(--black);
  }
`;

const TeamIconWrapper = styled.div`
  background-color: var(--orange-400);
  width: 16px;
  height: 16px;
  position: relative;
  border-radius: 3px;
  margin-right: 7px;
`;

const Bag = styled.svg`
  position: absolute;
  top: 1px;
  left: 1px;
`;
const Badge = styled.svg`
  position: absolute;
  width: 10px;
  height: 10px;
  bottom: -5px;
  right: -4px;
`;

function AsideLeft() {
  return (
    <LeftAside>
      <LeftSidebar>
        <SideNav>
          <LinkStyle>
            <NavLink
              className={({ isActive }) => (isActive ? 'selected' : '')}
              to='/'
            >
              <NavList>Home</NavList>
            </NavLink>
          </LinkStyle>
          <NavListTitle>
            PUBLIC
            <Category>
              <NavList>
                <FaGlobeAmericas className='globe' />
                Questions
              </NavList>
              <NavListInsert>Tags</NavListInsert>
              <LinkStyle>
                {/* 회원가입 수정 임의경로 설정 */}
                <NavLink
                  className={({ isActive }) => (isActive ? 'selected' : '')}
                  to='/users'
                >
                  <NavListInsert>Users</NavListInsert>
                </NavLink>
              </LinkStyle>
              <NavListInsert>Companies</NavListInsert>
            </Category>
          </NavListTitle>
          <NavListTitle>
            COLLECTIVES
            <InfoIcon>
              <svg
                fill='var(--black-400)'
                aria-hidden='true'
                className='svg-icon iconInfoSm'
                width='14'
                height='14'
                viewBox='0 0 14 14'
              >
                <path d='M7 1a6 6 0 1 1 0 12A6 6 0 0 1 7 1Zm1 10V6H6v5h2Zm0-6V3H6v2h2Z'></path>
              </svg>
            </InfoIcon>
            <Category>
              <NavList>
                <StarIcon>
                  <svg
                    fill='var(--orange-400)'
                    aria-hidden='true'
                    className='mt-auto fc-orange-400 svg-icon iconStarVerified'
                    width='18'
                    height='18'
                    viewBox='0 0 18 18'
                  >
                    <path d='M9.86.89a1.14 1.14 0 0 0-1.72 0l-.5.58c-.3.35-.79.48-1.23.33l-.72-.25a1.14 1.14 0 0 0-1.49.85l-.14.76c-.1.45-.45.8-.9.9l-.76.14c-.67.14-1.08.83-.85 1.49l.25.72c.15.44.02.92-.33 1.23l-.58.5a1.14 1.14 0 0 0 0 1.72l.58.5c.35.3.48.79.33 1.23l-.25.72c-.23.66.18 1.35.85 1.49l.76.14c.45.1.8.45.9.9l.14.76c.14.67.83 1.08 1.49.85l.72-.25c.44-.15.92-.02 1.23.33l.5.58c.46.52 1.26.52 1.72 0l.5-.58c.3-.35.79-.48 1.23-.33l.72.25c.66.23 1.35-.18 1.49-.85l.14-.76c.1-.45.45-.8.9-.9l.76-.14c.67-.14 1.08-.83.85-1.49l-.25-.72c-.15-.44-.02-.92.33-1.23l.58-.5c.52-.46.52-1.26 0-1.72l-.58-.5c-.35-.3-.48-.79-.33-1.23l.25-.72a1.14 1.14 0 0 0-.85-1.49l-.76-.14c-.45-.1-.8-.45-.9-.9l-.14-.76a1.14 1.14 0 0 0-1.49-.85l-.72.25c-.44.15-.92.02-1.23-.33l-.5-.58Zm-.49 2.67L10.6 6.6c.05.15.19.24.34.25l3.26.22c.36.03.5.48.23.71l-2.5 2.1a.4.4 0 0 0-.14.4l.8 3.16a.4.4 0 0 1-.6.44L9.2 12.13a.4.4 0 0 0-.42 0l-2.77 1.74a.4.4 0 0 1-.6-.44l.8-3.16a.4.4 0 0 0-.13-.4l-2.5-2.1a.4.4 0 0 1 .22-.7l3.26-.23a.4.4 0 0 0 .34-.25l1.22-3.03a.4.4 0 0 1 .74 0Z'></path>
                  </svg>
                </StarIcon>
                Explore Collectives
              </NavList>
            </Category>
          </NavListTitle>
          <NavListTitle>
            TEAMS
            <InfoIconT>
              <svg
                fill='var(--black-400)'
                aria-hidden='true'
                className='svg-icon iconInfoSm'
                width='14'
                height='14'
                viewBox='0 0 14 14'
              >
                <path d='M7 1a6 6 0 1 1 0 12A6 6 0 0 1 7 1Zm1 10V6H6v5h2Zm0-6V3H6v2h2Z'></path>
              </svg>
            </InfoIconT>
            <Category>
              <NavListTeam>
                <TeamIconWrapper>
                  <Bag
                    fill='var(--white)'
                    aria-hidden='true'
                    width='14'
                    height='14'
                    viewBox='0 0 14 14'
                  >
                    <path d='M4 3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1h.5c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5h-7A1.5 1.5 0 0 1 2 10.5v-5C2 4.67 2.67 4 3.5 4H4V3Zm5 1V3H5v1h4Z'></path>
                  </Bag>
                  <Badge
                    fill='var(--black-500)'
                    aria-hidden='true'
                    width='9'
                    height='10'
                    viewBox='0 0 9 10'
                  >
                    <path
                      fill='var(--white)'
                      d='M0 1.84 4.5 0 9 1.84v3.17C9 7.53 6.3 10 4.5 10 2.7 10 0 7.53 0 5.01V1.84Z'
                    ></path>
                    <path
                      fill='var(--black-500)'
                      d='M1 2.5 4.5 1 8 2.5v2.51C8 7.34 5.34 9 4.5 9 3.65 9 1 7.34 1 5.01V2.5Zm2.98 3.02L3.2 7h2.6l-.78-1.48a.4.4 0 0 1 .15-.38c.34-.24.73-.7.73-1.14 0-.71-.5-1.23-1.41-1.23-.92 0-1.39.52-1.39 1.23 0 .44.4.9.73 1.14.12.08.18.23.15.38Z'
                    ></path>
                  </Badge>
                </TeamIconWrapper>
                Create free Team
              </NavListTeam>
            </Category>
          </NavListTitle>
        </SideNav>
      </LeftSidebar>
    </LeftAside>
  );
}

export default AsideLeft;

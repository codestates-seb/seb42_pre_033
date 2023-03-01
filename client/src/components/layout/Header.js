import axios from 'axios';
import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useAuthContext } from '../../hooks/useAuthContext';
import Button from '../UI/Button';

const StyleHeader = styled.header`
  position: sticky;
  top: 0;
  width: 100%;
  min-width: 800px;
  height: calc(50px + 3px + 1px);
  z-index: 10;
`;

const Nav = styled.nav`
  color: var(--black-600);
  font-size: 13px;
  background-color: var(--black-025);
  ::before {
    content: '';
    width: 100%;
    position: absolute;
    bottom: 0;
    box-shadow: 0px 1px 2px 1px var(--black-100);
  }
`;

const NavList = styled.ul`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const NavBackground = styled.div`
  width: 100%;
  height: 3px;
  background-color: var(--orange-400);
`;

const NavWrapper = styled.div`
  max-width: 1264px;
  flex: 1 1 0;
  margin: 0 auto;
`;

const Logo = styled.li`
  width: 154px;
  height: 100%;
  overflow: hidden;
  cursor: pointer;
`;

const LogoImg = styled.img`
  width: 150px;
  height: 47px;
  object-position: top;
  object-fit: cover;
`;

const NavText = styled.li`
  width: auto;
  height: 30px;
  padding: 0 8px;
  border-radius: 1000px;
  margin-right: 4px;
  line-height: 30px;
  cursor: pointer;
  :hover {
    background-color: var(--black-075);
    border-radius: 20px;
  }
`;

const Search = styled.li`
  flex: 1 1 0;
  display: flex;
  height: 33px;
  position: relative;
  margin-right: 10px;
  border: 1px solid var(--black-200);
  border-radius: 3px;
  background-color: var(--white);
`;
const SearchInput = styled.input`
  flex: 1 1 200px;
  height: 31px;
  margin-left: 35px;
  border: none;
  outline: none;
  ::placeholder {
    color: var(--black-300);
  }
`;

const SearchSvg = styled.svg`
  position: absolute;
  top: 50%;
  margin: -9px;
  left: 18px;
  opacity: 40%;
`;

const ButtonWrapper = styled.li`
  display: flex;
  gap: 4px;
`;

function Header() {
  const { isAuthenticated, accessToken, refreshToken, logout } =
    useAuthContext();

  const handleLogout = () => {
    logout();

    axios({
      method: 'get',
      url: '/api/members/logout',
      headers: {
        authorization: accessToken,
        refresh: refreshToken,
      },
    })
      .then((response) => {
        if (response.status === 401) {
          // error coming back from server
          console.log(response.message);
          return;
        }

        if (response.status !== 200) {
          console.log('통신 오류');
          return;
        }
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <StyleHeader>
      <Nav>
        <NavBackground></NavBackground>
        <NavWrapper>
          <NavList>
            <Logo>
              <Link to='/'>
                <h1>
                  <LogoImg
                    src='/image/sprites.svg'
                    alt='Stack Overflow'
                  ></LogoImg>
                </h1>
              </Link>
            </Logo>

            {/* 404 페이지 임의연결 */}

            <NavText>
              <Link to='/*'>About</Link>
            </NavText>
            <NavText>
              <Link to='/*'>Products</Link>
            </NavText>
            <NavText>
              <Link to='/*'>For Teams</Link>
            </NavText>

            <Search>
              <SearchInput type='text' placeholder='Search...' />
              <SearchSvg
                aria-hidden='true'
                width='18'
                height='18'
                viewBox='0 0 18 18'
              >
                <path d='m18 16.5-5.14-5.18h-.35a7 7 0 1 0-1.19 1.19v.35L16.5 18l1.5-1.5ZM12 7A5 5 0 1 1 2 7a5 5 0 0 1 10 0Z'></path>
              </SearchSvg>
            </Search>
            <ButtonWrapper>
              {isAuthenticated ? (
                <Button onClick={handleLogout} variant='primary'>
                  Log out
                </Button>
              ) : (
                <Fragment>
                  <Link to='/login'>
                    <Button variant='secondary'>Log in</Button>
                  </Link>
                  <Link to='/signup'>
                    <Button variant='primary'>Sign Up</Button>
                  </Link>
                </Fragment>
              )}
            </ButtonWrapper>
          </NavList>
        </NavWrapper>
      </Nav>
    </StyleHeader>
  );
}

export default Header;

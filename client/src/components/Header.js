import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from './UI/Button';

const Nav = styled.div`
  width: 100vw;
  height: 50px;
  color: var(--black-600);
  font-size: 13px;
  background-color: var(--black-025);
  position: sticky;
  z-index: 10;
  ::before {
    content: '';
    width: 100%;
    position: absolute;
    bottom: 0;
    box-shadow: 0px 1px 2px 1px var(--black-100);
  }
`;

const NavUl = styled.ul`
  display: flex;
  justify-content: start;
`;

const NavBackground = styled.div`
  width: 100vw;
  height: 3px;
  background-color: var(--orange-400);
`;

const NavWrapper = styled.div`
  width: 1264px;
  margin: 0 auto;
`;

const Logo = styled.li`
  width: 154px;
  height: 47px;
  overflow: hidden;
  margin-left: 10px;
  cursor: pointer;
`;

const LogoImg = styled.img`
  width: 95%;
`;

const NavText = styled.li`
  height: 29px;
  padding: 15px 13px;
  margin-top: 8px;
  line-height: 1px;
  cursor: pointer;
  :hover {
    background-color: var(--black-075);
    border-radius: 20px;
  }

  :last-child {
    margin-right: 10px;
  }
`;
const Search = styled.li`
  width: 702px;
  height: 33px;
  position: relative;
  margin-top: 8px;
  border: 1px solid var(--black-200);
  border-radius: 3px;
  background-color: var(--white);
`;
const SearchInput = styled.input`
  width: 660px;
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
  height: 33px;
  padding-top: 8px;
  padding-left: 4px;
`;

function Header() {
  return (
    <header>
      <Nav>
        <NavBackground></NavBackground>
        <NavWrapper>
          <NavUl>
            <Link to='/'>
              <Logo>
                <h1>
                  <LogoImg
                    src='/image/sprites.svg'
                    alt='Stack Overflow'
                  ></LogoImg>
                </h1>
              </Logo>
            </Link>
            <NavText>About</NavText>
            <NavText>Products</NavText>
            <NavText>For Teams</NavText>
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
              <Link to='/login'>
                <Button variant='secondary'>Login</Button>
              </Link>
            </ButtonWrapper>
            <ButtonWrapper>
              <Button variant='primary'>Sign Up</Button>
            </ButtonWrapper>
          </NavUl>
        </NavWrapper>
      </Nav>
    </header>
  );
}

export default Header;

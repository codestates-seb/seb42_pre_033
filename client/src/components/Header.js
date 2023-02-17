import styled from 'styled-components';

const Nav = styled.div`
  width: 100vw;
  height: 50px;
  color: var(--black-600);
  font-size: 13px;
  background-color: var(--black-025);
  position: fixed;
  ::before {
    content: '';
    width: 100%;
    position: absolute;
    bottom: 0;
    box-shadow: 0px 1px 2px 1px var(--black-075);
  }

  .nav_b {
    width: 100vw;
    height: 3px;
    background-color: var(--orange-400);
  }

  .nav_wrapper {
    width: 1264px;
    margin: 0 auto;
  }
  ul {
    display: flex;
    justify-content: start;
  }
  .logo {
    width: 154px;
    height: 47px;
    overflow: hidden;
    margin-left: 10px;
    cursor: pointer;

    img {
      width: 95%;
    }
  }
  .nav_text {
    height: 29px;
    padding: 15px;
    margin-top: 8px;
    line-height: 1px;
    cursor: pointer;
  }
  .nav_text_last {
    margin-right: 5px;
  }
  .nav_text:hover {
    background-color: var(--black-075);
    border-radius: 20px;
  }
  .search {
    width: 702px;
    height: 33px;
    position: relative;
    margin-top: 8px;
    border: 1px solid var(--black-200);
    border-radius: 3px;
    background-color: var(--white);
    input {
      width: 660px;
      height: 31px;
      margin-left: 35px;
      border: none;
      outline: none;
      ::placeholder {
        color: var(--black-300);
      }
    }
    .search_icon {
      position: absolute;
      top: 50%;
      margin: -9px;
      left: 18px;
      opacity: 40%;
    }
  }
  .nav_button {
    height: 33px;
    padding: 10px;
    margin-left: 10px;
    margin-top: 8px;
    line-height: 0px;
    border-radius: 3px;
    color: var(--powder-700);
    background-color: var(--powder-100);
    border: 1px solid var(--powder-500);
  }
  .nav_button:hover {
    background-color: var(--powder-300);
  }
  .nav_button_last {
    margin-left: 4px;
    background-color: var(--blue-500);
    color: var(--white);
  }
  .nav_button_last:hover {
    background-color: var(--blue-600);
  }
`;

function Header() {
  return (
    <Nav>
      <div className='nav_b'></div>
      <div className='nav_wrapper'>
        <ul>
          <li className='logo'>
            <h1>
              <img src='/image/sprites.svg' alt='Stack Overflow'></img>
            </h1>
          </li>
          <li className='nav_text'>About</li>
          <li className='nav_text'>Products</li>
          <li className='nav_text nav_text_last'>For Teams</li>
          <li className='search'>
            <input type='text' placeholder='Search...' />
            <svg
              aria-hidden='true'
              className='search_icon'
              width='18'
              height='18'
              viewBox='0 0 18 18'
            >
              <path d='m18 16.5-5.14-5.18h-.35a7 7 0 1 0-1.19 1.19v.35L16.5 18l1.5-1.5ZM12 7A5 5 0 1 1 2 7a5 5 0 0 1 10 0Z'></path>
            </svg>
          </li>
          <li>
            <button className='nav_button'>Log in</button>
            <button className='nav_button nav_button_last'>Sign Up</button>
          </li>
        </ul>
      </div>
    </Nav>
  );
}

export default Header;

import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaGlobeAmericas } from 'react-icons/fa';


const LeftAside = styled.aside`
.left-sidebar {
  width: 164px;
}

.side-nav {
  height: auto;
  max-width: 100%;
  position: sticky;
  margin: 50px 0px;
  padding: 20px 0px;
}

.side-nav-div{
  padding: 10px 0px;

}
.side-nav-div div {
  padding-left: 10px;
}

.side-nav-links {
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 10px;
  transition: 0.2s;
}

.side-nav-links:hover {
  color: black;
}

.active {
  font-weight: bold;
  color: black;
  background-color: white;
  border-right: solid 3px orange;
}
`;

function LeftSidebar() {
  return (
    <LeftAside>
      <div className='left-sidebar'>
        <nav className='side-nav'>
          <Link to='/' className='side-nav-links' activeClassName='active'>
            <p>Home</p>
          </Link>
          <div className='side-nav-div'>
            <div>
              <p>PUBLIC</p>
            </div>
            <Link to='/Questions' className='side-nav-links' activeClassName='active'>
              <FaGlobeAmericas />
              <p>Questions</p>
            </Link>
            <Link to='/Tags' className='side-nav-links' activeClassName='active'>
              <p>Tags</p>
            </Link>
            <Link to='/Users' className='side-nav-links' activeClassName='active'>
              <p>Users</p>
            </Link>
        </div>
        </nav>

      </div>
    </LeftAside>
  );
}

export default LeftSidebar;
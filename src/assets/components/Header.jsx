import styled from 'styled-components';
import PropTypes from 'prop-types';


const HeaderContainer = styled.header`
  background: rgba(0, 0, 0, 0.01);
  backdrop-filter: blur(10px);
  padding: 20px 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  
  margin: 0 auto; /* Center the container */
  position: fixed;
  top: 0;
  
  z-index: 1000; /* Ensure it stays on top of other elements */
`;

const Nav = styled.nav`
  display: flex;
  gap: 30px;
`;

const NavLink = styled.a`
  color: black;
  text-decoration: none;
  font-size: 1em;
  transition: color 0.3s;

  &:hover {
    color: #00ffcc;
  }
`;

const Logo = styled.h1`
  margin: 0;
  color: black;
`;



const Header = ({ setCurrentPage }) => {
    return (
      <HeaderContainer>
        <Logo onClick={() => setCurrentPage('home')} style={{ cursor: 'pointer' }}>
          Phu Pham
        </Logo>
        <Nav>
          
          <NavLink href="#" onClick={() => setCurrentPage('projects')}>
            Projects
          </NavLink>
          <NavLink href="#" onClick={() => setCurrentPage('contact')}>
            Contact
          </NavLink>
        </Nav>
      </HeaderContainer>
    )
}

Header.propTypes = {

    setCurrentPage: PropTypes.func.isRequired,
};


export default Header;

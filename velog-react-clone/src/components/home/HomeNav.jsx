
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const NavBody = styled.nav`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const NavTab = styled(Link)`
  padding: 0.5rem;
  color: grey;
  font-size: 1.5rem;
  border: none;
  background: none;
  font-weight: 600;
  color: ${(props) => (props.current ? "black" : "grey")};
  border-bottom: solid 2px 
    ${(props) => (props.current ? "black" : 'transparent')};
  
  &:hover {
    color: black;
  }

  transition: border-bottom 0.5s ease-in;
`;



function HomeNav() {
  const { pathname } = useLocation();
  return (
    <NavBody>
      <NavTab to="/" current={pathname === "/"}>포스트</NavTab>
      <NavTab to="/series" current={pathname === "/series"}>시리즈</NavTab>
    </NavBody>
  )
}

export default HomeNav;




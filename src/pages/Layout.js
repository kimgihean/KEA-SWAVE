import { Outlet, Link } from "react-router-dom";
import styled from 'styled-components';
import background2 from '../img/background2.jpg';
import background3 from '../img/background3.jpg';

const Nav = styled.nav`
    background: url(${background3});
    background-repeat: no-repeat;
    background-position: bottom center;
    background-size: cover;
    height: 50px;
    display: flex;
    justify-content: right;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 999;
`;

const Ul = styled.ul`
  list-style:none;
  margin:0;
  padding:0;
`;

const Li = styled.li`
  margin-right: 20px;
  padding: 0 0 0 0;
  border : 0;
  float: right;
`;

const Div = styled.div`
  background: url(${background2});
  background-repeat: no-repeat;
  background-position: top center;
  background-size: cover;
  padding: 5px;
  height: 100px;
`;

const Layout = () => {
    
    return (
        <>
        <Div>
            <h1 align="center">SWAVE</h1>
        </Div>
        <Nav>
            <Ul>
            <Li>
                <Link to="/Vision">Vision</Link>
            </Li>
            <Li>
                <Link to="/Contents">Contents</Link>
            </Li>
            <Li>
                <Link to="/Members">Members</Link>
            </Li>
            <Li>
                <Link to="/">Home</Link>
            </Li>
            </Ul>
        </Nav>
        <br></br>
        <Outlet />
        </>
) };

export default Layout;

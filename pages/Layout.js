import { Outlet, Link } from "react-router-dom";
import teamLogo from '../images/logo.png'
import teamPic from '../images/2.jpg'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';

 

const Layout = () => {
    return (
        <>
          <nav style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", backgroundColor: "#242424" }}>
   
               <li style={{ listStyle: 'none' , marginRight: '15px' }  }> 
                    <Link to="/">Home</Link> 
                </li>
               <li style={{ listStyle: 'none' }  }> 
                        <Link to="/teammate#">Teammate</Link>
                    </li> 
                    
                      <img src={teamLogo} width="250" height="250" alt="SWave logo"/>  
                      
        <li style={{ listStyle: 'none' , marginRight: '15px' }  }> 
                        <Link to="/vision#">Vision</Link>
                    </li>
                    
               <li style={{ listStyle: 'none' }  }> 
                        <Link to="/custom#">Custom</Link>
                    </li> 
                     
            </nav>
            <Outlet />
        </>
    )
}; 

export default Layout;
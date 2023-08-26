import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom';


function BasicExample() {
    const goldenTextStyle = {
        color: '#fff',
      };
    
      return (
        
        <Navbar expand="lg" className="bg">
          <Container>
            <Navbar.Brand style={goldenTextStyle} className='vall'>
              <h1>TAMILNADU TOURISM</h1>
             
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto  " >
              <Nav.Link as={Link}  to='/' style={goldenTextStyle}>Home </Nav.Link> 
              <Nav.Link as={Link}  to='/placetovisit' style={goldenTextStyle}>Place To Visit</Nav.Link>
              <Nav.Link   style={goldenTextStyle}>Best Time To Visit</Nav.Link>
              <Nav.Link   style={goldenTextStyle}>Packages</Nav.Link>
              <Nav.Link  style={goldenTextStyle}>Destination</Nav.Link>
              <Nav.Link  style={goldenTextStyle}>Food</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
    }
    
    export default BasicExample;
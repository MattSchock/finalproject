import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="homepath">Home</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="todolistpath">To Do List</Nav.Link>
            <Nav.Link as={Link} to="grocerylistpath">Grocery List</Nav.Link>
            
            
            
          </Nav>
        </Container>
      </Navbar>
      <br />
    </>
  );
}

export default NavBar;
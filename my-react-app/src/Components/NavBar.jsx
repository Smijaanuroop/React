

// export default ContainerOutsideExample;
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function ContainerOutsideExample() {
  return (
    <Navbar expand="lg" style={{ backgroundColor: "orange" }}>
      <Container>
        <Navbar.Brand href="#">Futura Labs</Navbar.Brand>

        {/* Hamburger for Mobile */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">Students</Nav.Link>
            <Nav.Link href="#">Courses</Nav.Link>
            <Nav.Link href="#">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>

      </Container>
    </Navbar>
  );
}

export default ContainerOutsideExample;
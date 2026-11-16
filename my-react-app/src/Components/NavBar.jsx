

// // export default ContainerOutsideExample;
// import Container from 'react-bootstrap/Container';
// import Navbar from 'react-bootstrap/Navbar';
// import Nav from 'react-bootstrap/Nav';

// function ContainerOutsideExample() {
//   return (
//     <Navbar expand="lg" style={{ backgroundColor: "orange" }}>
//       <Container>
//         <Navbar.Brand href="#">Futura Labs</Navbar.Brand>

//         {/* Hamburger for Mobile */}
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="ms-auto">
//             <Nav.Link href="#">Home</Nav.Link>
//             <Nav.Link href="#">Students</Nav.Link>
//             <Nav.Link href="#">Courses</Nav.Link>
//             <Nav.Link href="#">Contact</Nav.Link>
//           </Nav>
//         </Navbar.Collapse>

//       </Container>
//     </Navbar>
//   );
// }

// export default ContainerOutsideExample;


// Student Management

import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <div>
      
      <Link to="/">Home</Link> | <Link to="/register">Register</Link> | <Link to="/student">Student</Link>
      <h1>Student Management</h1>
    </div>
  )
}

export default NavBar
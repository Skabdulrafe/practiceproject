import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="success" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Musket</Navbar.Brand>
          <Nav className="me-auto d-flex gap-5 justify-content-space-around">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="about-us">aboutus</Nav.Link>
            <Nav.Link href="#pricing">Product</Nav.Link>
            <Nav.Link href="#pricing">location</Nav.Link>
            <Nav.Link href="#pricing">contact us</Nav.Link>
            
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample
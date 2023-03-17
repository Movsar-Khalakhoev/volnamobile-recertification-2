import { Container, Navbar } from "react-bootstrap";

export function Header() {
  return (
    <Navbar bg="primary" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Магазин</Navbar.Brand>
      </Container>
    </Navbar>
  );
}

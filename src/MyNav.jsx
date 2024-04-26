import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "./assets/logo.png";
import Stack from "react-bootstrap/Stack";

const MyNav = () => {
  return (
    <Navbar
      expand="lg"
      className="bg-navbar-netflix"
      data-bs-theme="dark"
    >
      <Container fluid>
        <Navbar.Brand href="#home">
          <img src={logo} alt="logo" className="img-logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Nav.Link
              href="#home"
              active
              className="fw-bold"
            >
              Home
            </Nav.Link>
            <Nav.Link href="#Tvshows" className="fw-bold">
              Tv shows
            </Nav.Link>
            <Nav.Link href="#Movies" className="fw-bold">
              Movies
            </Nav.Link>
            <Nav.Link
              href="#Recentlyadded"
              className="fw-bold"
            >
              Recently added
            </Nav.Link>
            <Nav.Link href="#Mylist" className="fw-bold">
              My list
            </Nav.Link>
          </Nav>
          <Stack
            direction="horizontal"
            className="ms-auto"
            gap={1}
            id="kids"
          >
            <div>
              <i class="bi bi-search icons"></i>
            </div>
            <div className="p-2 fw-bold text-white">
              KIDS
            </div>
            <div>
              <i class="bi bi-bell icons"></i>
            </div>
            <div>
              <i class="bi bi-person-circle icons"></i>
            </div>
          </Stack>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNav;

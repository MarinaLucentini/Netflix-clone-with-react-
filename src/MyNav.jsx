import logo from "./assets/logo.png";

import { Component } from "react";
import {
  Button,
  Container,
  Nav,
  Navbar,
  Stack,
  Form,
  InputGroup,
} from "react-bootstrap";

class MyNav extends Component {
  state = {
    isShow: false,
    searchUser: "",
  };
  handleCLickButton = () => {
    this.setState({ isShow: true });
  };
  handleInput = (e) => {
    this.setState({ searchUser: e.target.value });
  };
  handleButtonInput = () => {
    console.log(this.state.searchUser);
    this.props.onSearch(this.state.searchUser);
  };
  render() {
    return (
      <Navbar
        expand="lg"
        className="bg-navbar-netflix"
        data-bs-theme="dark"
      >
        <Container fluid>
          <Navbar.Brand href="#home">
            <img
              src={logo}
              alt="logo"
              className="img-logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              <Nav.Link href="#home" className="fw-bold">
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
              className="ms-auto align-items-center"
              gap={1}
              id="kids"
            >
              {this.state.isShow && (
                <>
                  <InputGroup>
                    <Form.Control
                      placeholder="Cerca la tua saga"
                      aria-label="Recipient's username"
                      aria-describedby="basic-addon2"
                      onChange={this.handleInput}
                      value={this.state.searchUser}
                    />
                    <Button
                      variant="outline-secondary"
                      id="button-addon2"
                      onClick={this.handleButtonInput}
                    >
                      Cerca
                    </Button>
                  </InputGroup>
                </>
              )}
              <Button
                variant="btn"
                onClick={this.handleCLickButton}
              >
                <i className="bi bi-search icons"></i>
              </Button>
              <div className="p-2 fw-bold text-white">
                KIDS
              </div>
              <div>
                <i className="bi bi-bell icons"></i>
              </div>
              <div>
                <i className="bi bi-person-circle icons"></i>
              </div>
            </Stack>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default MyNav;

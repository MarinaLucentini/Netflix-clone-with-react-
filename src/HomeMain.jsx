import {
  Col,
  Container,
  Row,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
} from "react-bootstrap";

import { Component } from "react";
import MyGallery from "./MyGallery";
import MyNav from "./MyNav";
import MyFooter from "./MyFooter";

class HomeMain extends Component {
  state = {
    searchUser: "",
  };
  handlesearchUser = (search) => {
    this.setState({ searchUser: search });
    console.log(typeof this.state.searchUser);
  };
  render() {
    return (
      <>
        <header>
          <MyNav onSearch={this.handlesearchUser} />
        </header>
        <main>
          <Container fluid className="px-4">
            <Row>
              <Col className="d-flex">
                <h2 className="mb-4">Tv Show</h2>
                <Dropdown className="ms-4 mt-1" autoClose>
                  <DropdownToggle
                    className="btn-sm rounded-0"
                    variant="outline-secondary"
                  >
                    Genres
                  </DropdownToggle>
                  <DropdownMenu>
                    <Dropdown.Item href="#/action-1">
                      Commedy
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-2">
                      Drama
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">
                      Thriller
                    </Dropdown.Item>
                  </DropdownMenu>
                </Dropdown>
              </Col>
              <Col className="d-flex justify-content-end">
                <i class="bi bi-grid icons"></i>

                <i class="bi bi-grid-3x3 icons"></i>
              </Col>
            </Row>
            <MyGallery
              title={"Trending Now"}
              fetch={"Harry Potter"}
            />
            <MyGallery
              title={"Watch it Again"}
              fetch={"Star Wars"}
            />
            <MyGallery
              title={"New Releases"}
              fetch={"Lord of the Rings"}
            />
          </Container>
        </main>
        <MyFooter />
      </>
    );
  }
}

export default HomeMain;

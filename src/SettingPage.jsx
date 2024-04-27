import MyNav from "./MyNav";
import {
  Container,
  Row,
  Col,
  Button,
} from "react-bootstrap";
import profile from "./assets/avatar.png";

const SettingPage = () => {
  return (
    <>
      <MyNav />
      <main className="bg-white">
        <Container className="py-5">
          <Row>
            <Col xs={2}></Col>
            <Col xs={8}>
              <h3 className="text-dark">Account</h3>
              <hr className="border border-secondary" />
              <Container className=" my-5">
                <Row xs={4}>
                  <Col>
                    <h6 className="text-secondary">
                      MEMBERSHIP & BILLING
                    </h6>
                  </Col>
                  <Col>
                    <h6 className="text-dark">
                      student@strive.strip
                    </h6>
                  </Col>
                  <Col>
                    <a href="#change">
                      {" "}
                      Change account email{" "}
                    </a>
                  </Col>
                </Row>
                <Row xs={4}>
                  <Col>
                    <Button variant="secondary">
                      Cancel Membership
                    </Button>
                  </Col>
                  <Col>
                    <h6 className="text-secondary">
                      Password
                    </h6>
                  </Col>
                  <Col>
                    <a href="#change pass">
                      {" "}
                      Change password{" "}
                    </a>
                  </Col>
                </Row>
                <Row xs={4}>
                  <Col></Col>
                  <Col>
                    <h6 className="text-secondary">
                      Phone
                    </h6>
                  </Col>
                  <Col>
                    <a href="#changenum">
                      {" "}
                      Change number phone{" "}
                    </a>
                  </Col>
                </Row>
                <hr className="border border-secondary" />
              </Container>
              <Container className="my-5">
                <Row xs={4}>
                  <Col></Col>
                  <Col>
                    <h6 className="text-black">
                      <i className="bi bi-paypal"></i>Paypal
                    </h6>
                  </Col>
                  <Col>
                    <a href="#update"> Update payment</a>
                  </Col>
                </Row>
                <Row xs={4}>
                  <Col></Col>
                  <Col></Col>
                  <Col>
                    <a href="#billing"> Billing Details </a>
                  </Col>
                </Row>
                <hr className="border border-secondary" />
              </Container>
              <Container className="my-5">
                <Row xs={4}>
                  <Col></Col>
                  <Col></Col>
                  <Col>
                    <a href="#render">
                      Render gift card or promo code
                    </a>
                  </Col>
                </Row>
                <Row xs={4}>
                  <Col></Col>
                  <Col></Col>
                  <Col>
                    <a href="#where">
                      {" "}
                      Where to buy gift card{" "}
                    </a>
                  </Col>
                </Row>
                <hr className="border border-secondary" />
              </Container>
              <Container className="my-5">
                <Row xs={4}>
                  <Col>
                    <h6 className="text-secondary">
                      PLAN DETAILS
                    </h6>
                  </Col>
                  <Col>
                    <h6 className="text-dark">
                      Premium{" "}
                      <i className="bi bi-badge-hd"></i>
                    </h6>
                  </Col>
                  <Col>
                    <a href="#changeplan"> Change plan </a>
                  </Col>
                </Row>
                <hr className="border border-secondary" />
              </Container>
              <Container className=" my-5">
                <Row xs={4}>
                  <Col>
                    <h6 className="text-secondary">
                      SETTINGS
                    </h6>
                  </Col>
                  <Col>
                    <a href="#parental">
                      Parental controls
                    </a>
                  </Col>
                  <Col></Col>
                </Row>
                <Row xs={4}>
                  <Col></Col>
                  <Col>
                    <a href="#test">Test participation</a>
                  </Col>
                  <Col></Col>
                </Row>
                <Row xs={4}>
                  <Col></Col>
                  <Col>
                    <a href="#manage">
                      Manage download devices
                    </a>
                  </Col>
                  <Col></Col>
                </Row>
                <Row xs={4}>
                  <Col></Col>
                  <Col>
                    <a href="#active">Active a devices</a>
                  </Col>
                  <Col></Col>
                </Row>
                <Row xs={4}>
                  <Col></Col>
                  <Col>
                    <a href="#recent">
                      Recent delive treaming activity
                    </a>
                  </Col>
                  <Col></Col>
                </Row>
                <Row xs={4}>
                  <Col></Col>
                  <Col>
                    <a href="#sign">
                      Sign out all devices{" "}
                    </a>
                  </Col>
                  <Col></Col>
                </Row>
                <hr className="border border-secondary" />
              </Container>
              <Container className=" my-5">
                <Row xs={4}>
                  <Col>
                    <h6 className="text-secondary">
                      MY PROFILE
                    </h6>
                  </Col>
                  <Col className=" d-flex align-items-center">
                    <img
                      src={profile}
                      alt=""
                      className="img-fluid w-50 mx-3"
                    />
                    <h6 className="text-secondary">
                      Strive Student
                    </h6>
                  </Col>
                  <Col>
                    <a href="#changeaccount">
                      {" "}
                      Change account email{" "}
                    </a>
                  </Col>
                </Row>
                <Row xs={4}>
                  <Col></Col>
                  <Col></Col>
                  <Col>
                    <a href="#manage"> Manage profile </a>
                  </Col>
                </Row>
                <Row xs={4}>
                  <Col></Col>
                  <Col></Col>
                  <Col>
                    <a href="#addprofile"> Add profile</a>
                  </Col>
                </Row>
                <Row xs={4}>
                  <Col>
                    <a href="#Language">Languages</a>
                  </Col>
                  <Col></Col>
                  <Col>
                    <a href="#viweing"> Viweing activity</a>
                  </Col>
                </Row>
                <Row xs={4}>
                  <Col>
                    <a href="#playback">
                      Playback settings
                    </a>
                  </Col>
                  <Col></Col>
                  <Col>
                    <a href="#rating">Rating</a>
                  </Col>
                </Row>
                <Row xs={4}></Row>
              </Container>
            </Col>
          </Row>
        </Container>
      </main>
    </>
  );
};
export default SettingPage;

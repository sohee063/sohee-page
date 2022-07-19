import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

const Home = () => {
  return (
    <Container>
      <Col lg={12}>
        <Row lg={11}>
          <div className="hometitle">
            SOHEE
            <br />
            WORK SPACE
          </div>
        </Row>
        <Row lg={1}>
          <div className="homesubtitle">소히공간</div>
          <div className="homesubtitle">포트폴리오 마이페이지</div>
        </Row>
      </Col>
    </Container>
  );
};

export default Home;

import {Col, Container, Row, Button} from "react-bootstrap"

const Intro = () => {
  return (
    <div className="intro">
      <Container className="d-flex justify-content-center align-items-center">
        <Row>
          <Col>
            <div className="title">WATCHING MOVIE</div>
            <div className="title">WITHOUT BUY TICKETS</div>
            <div className="intro-button mt-4 text-center">
              <Button variant="outline-light" size="lg">
                Get Started
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
export default Intro

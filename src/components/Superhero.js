import {Card, Col, Container, Image, Row} from "react-bootstrap"
import batmanImg from "../assets/img/superhero/thebatman.jpeg"
import momImg from "../assets/img/superhero/mom.jpeg"
import endgameImg from "../assets/img/superhero/endgame.jpeg"
import nwhImg from "../assets/img/superhero/nwh.jpg"
import deadpoolImg from "../assets/img/superhero/deadpool.jpeg"
import mandalorianImg from "../assets/img/superhero/mandalorian.jpeg"

const Superhero = () => {
  return (
    <Container>
      <Row>
        <div className="text-white text-center pb-5">
          <h1>Superhero Movies</h1>
        </div>
        <Col md={4} className="movie-wrapper">
          <Card className="bg-dark movie-image">
            <Image
              src={batmanImg}
              alt="Hereditary Image"
              className="image-card"
            />
            <div className="bg-dark">
              <div className="p-2 m-1 text-white">
                <Card.Title className="text-center">The Batman</Card.Title>
                <Card.Text>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Commodi iste provident odit ratione minus quo mollitia nihil,
                  minima laborum sequi?
                </Card.Text>
                <Card.Text>Last updated 1 mins ago</Card.Text>
              </div>
            </div>
          </Card>
        </Col>
        <Col md={4} className="movie-wrapper">
          <Card className="bg-dark movie-image">
            <Image
              src={momImg}
              alt="Dr. Strange in The Multiverse of Madness Image"
              className="image-card"
            />
            <div className="bg-dark">
              <div className="p-2 m-1 text-white">
                <Card.Title className="text-center">
                  Dr. Stranger in The Multiverse of Madness
                </Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aperiam quas accusamus, vitae soluta qui provident veritatis!
                  Cumque quam deserunt sed.
                </Card.Text>
                <Card.Text>Last updated 3 mins ago</Card.Text>
              </div>
            </div>
          </Card>
        </Col>
        <Col md={4} className="movie-wrapper">
          <Card className="bg-dark movie-image">
            <Image
              src={nwhImg}
              alt="Spiderman No Way Home Image"
              className="image-card"
            />
            <div className="bg-dark">
              <div className="p-2 m-1 text-white">
                <Card.Title className="text-center">
                  Spiderman: No Way Home
                </Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
                  nesciunt aspernatur architecto quasi vero laboriosam quo ut
                  repellat quae sit?
                </Card.Text>
                <Card.Text>Last updated 4 mins ago</Card.Text>
              </div>
            </div>
          </Card>
        </Col>
        <Col md={4} className="movie-wrapper">
          <Card className="bg-dark movie-image">
            <Image
              src={deadpoolImg}
              alt="Deadpool Image"
              className="image-card"
            />
            <div className="bg-dark">
              <div className="p-2 m-1 text-white">
                <Card.Title className="text-center">Deadpool</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Numquam corporis qui aperiam impedit rerum voluptates
                  repudiandae veritatis exercitationem dignissimos praesentium!
                </Card.Text>
                <Card.Text>Last updated 5 mins ago</Card.Text>
              </div>
            </div>
          </Card>
        </Col>
        <Col md={4} className="movie-wrapper">
          <Card className="bg-dark movie-image">
            <Image
              src={endgameImg}
              alt="Avenger Endgame Image"
              className="image-card"
            />
            <div className="bg-dark">
              <div className="p-2 m-1 text-white">
                <Card.Title className="text-center">
                  Avenger: Endgame
                </Card.Title>
                <Card.Text>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Incidunt illo aliquid ratione neque, cupiditate deserunt nisi
                  quod quasi sequi culpa.
                </Card.Text>
                <Card.Text>Last updated 9 mins ago</Card.Text>
              </div>
            </div>
          </Card>
        </Col>
        <Col md={4} className="movie-wrapper">
          <Card className="bg-dark movie-image">
            <Image
              src={mandalorianImg}
              alt="Mandalorian Image"
              className="image-card"
            />
            <div className="bg-dark">
              <div className="p-2 m-1 text-white">
                <Card.Title className="text-center">Mandalorian</Card.Title>
                <Card.Text>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Asperiores aperiam, voluptatibus accusamus sapiente aliquid
                  quae necessitatibus culpa odio nostrum quaerat.
                </Card.Text>
                <Card.Text>Last updated 4 mins ago</Card.Text>
              </div>
            </div>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default Superhero

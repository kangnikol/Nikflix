import {Card, Col, Container, Image, Row} from "react-bootstrap"
import hereditaryImg from "../assets/img/trending/hereditary.jpg"
import midsommarImg from "../assets/img/trending/midsommar.jpg"
import usImg from "../assets/img/trending/us.jpg"
import turningRedImg from "../assets/img/trending/turningRed.jpeg"
import fssodImg from "../assets/img/trending/fssod.webp"
import unchartedImg from "../assets/img/trending/uncharted.jpeg"

const Trending = () => {
  return (
    <Container>
      <Row>
        <div className="text-white text-center pb-5">
          <h1>Trending Movies</h1>
        </div>
        <Col md={4} className="movie-wrapper">
          <Card className="bg-dark movie-image">
            <Image
              src={hereditaryImg}
              alt="Hereditary Image"
              className="image-card"
            />
            <div className="bg-dark">
              <div className="p-2 m-1 text-white">
                <Card.Title className="text-center">Hereditary</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Sequi, nesciunt blanditiis sunt perferendis placeat autem
                  maiores assumenda. Quidem, laudantium voluptas!
                </Card.Text>
                <Card.Text>Last updated 3 mins ago</Card.Text>
              </div>
            </div>
          </Card>
        </Col>
        <Col md={4} className="movie-wrapper">
          <Card className="bg-dark movie-image">
            <Image
              src={midsommarImg}
              alt="Midsommar Image"
              className="image-card"
            />
            <div className="bg-dark">
              <div className="p-2 m-1 text-white">
                <Card.Title className="text-center">Midsommar</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Tempore voluptatum dignissimos veniam maiores cum quaerat
                  natus quidem amet dolore atque.
                </Card.Text>
                <Card.Text>Last updated 4 mins ago</Card.Text>
              </div>
            </div>
          </Card>
        </Col>
        <Col md={4} className="movie-wrapper">
          <Card className="bg-dark movie-image">
            <Image src={usImg} alt="US Image" className="image-card" />
            <div className="bg-dark">
              <div className="p-2 m-1 text-white">
                <Card.Title className="text-center">US</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
                  aut debitis quaerat similique iusto quis adipisci provident
                  tempore ut consequatur?
                </Card.Text>
                <Card.Text>Last updated 2 mins ago</Card.Text>
              </div>
            </div>
          </Card>
        </Col>
        <Col md={4} className="movie-wrapper">
          <Card className="bg-dark movie-image">
            <Image
              src={fssodImg}
              alt="Fantastic Beast Secrets of Dumbledore Image"
              className="image-card"
            />
            <div className="bg-dark">
              <div className="p-2 m-1 text-white">
                <Card.Title className="text-center">
                  Fantastic Beast Secrets of Dumbledore
                </Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Architecto, ipsa ab rem quis quibusdam expedita ducimus
                  suscipit beatae repellendus cumque?
                </Card.Text>
                <Card.Text>Last updated 3 mins ago</Card.Text>
              </div>
            </div>
          </Card>
        </Col>
        <Col md={4} className="movie-wrapper">
          <Card className="bg-dark movie-image">
            <Image
              src={turningRedImg}
              alt="Turning Red Image"
              className="image-card"
            />
            <div className="bg-dark">
              <div className="p-2 m-1 text-white">
                <Card.Title className="text-center">Turning Red</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aliquam, perferendis omnis? Rem quae quo commodi dolorem totam
                  adipisci ipsam error!
                </Card.Text>
                <Card.Text>Last updated 2 mins ago</Card.Text>
              </div>
            </div>
          </Card>
        </Col>
        <Col md={4} className="movie-wrapper">
          <Card className="bg-dark movie-image">
            <Image
              src={unchartedImg}
              alt="Uncharted Image"
              className="image-card"
            />
            <div className="bg-dark">
              <div className="p-2 m-1 text-white">
                <Card.Title className="text-center">Uncharted</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Accusamus, obcaecati quam perferendis cumque laboriosam
                  temporibus ab hic? Nulla, amet magni.
                </Card.Text>
                <Card.Text>Last updated 5 mins ago</Card.Text>
              </div>
            </div>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default Trending

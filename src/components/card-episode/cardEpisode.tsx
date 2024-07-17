import { Card, Col, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";


export const CardEpisode = () => {
  return (
    <>
    <Col className="mb-5">
      <Link to='/episodios'>
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>The Wedding Squanchers</Card.Title>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>Episódio: S02E10</ListGroup.Item>
            <ListGroup.Item>Data Exibicão: October 4, 2015</ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>
      </Link>
    </Col>
    </>
  )
}
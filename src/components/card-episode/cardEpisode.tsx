import { Card, Col, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

interface CardEpisodeProps {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  url: string;
}


export const CardEpisode = ({ id,name, air_date, episode}: CardEpisodeProps) => {
  return (
    <>
    <Col className="mb-5">
      <Link to={`/episodios/${id}`}>
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>Episódio: {episode}</ListGroup.Item>
            <ListGroup.Item>Data Exibicão: {air_date}</ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>
      </Link>
    </Col>
    </>
  )
}
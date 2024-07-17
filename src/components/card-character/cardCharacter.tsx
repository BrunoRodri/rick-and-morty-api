import { Card, ListGroup, Col } from "react-bootstrap";

import { Link } from "react-router-dom";
import './styles.css'

interface CardCharacterProps {
  image: string;
  name: string;
  species: string;
  status: string;
  location: {
    name: string;
    url: string;
  };
}


export const CardCharacter = ({ image, name, species, status, location}: CardCharacterProps) => {
  return(
  <>
  <Col className="mb-3 perso">
  <Link className="perso" to='/personagens'>
    <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{species}</Card.Text>
          <Card.Text>Status: {status}</Card.Text>
          <ListGroup className="mb-3"> 
              <ListGroup.Item>Ultima Localização: <br/> {location.name}</ListGroup.Item>
            </ListGroup>
        </Card.Body>
    </Card>
  </Link>
  </Col>
  </>
  )
};
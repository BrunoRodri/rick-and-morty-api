import { Card, ListGroup, Col } from "react-bootstrap";
import Logo from '../../assets/Rick_and_Morty.svg'
import { Link } from "react-router-dom";
import './styles.css'


export const CardCharacter = () => {
  return(
  <>
  <Col className="mb-3 perso">
  <Link className="perso" to='/personagens'>
    <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={Logo} />
        <Card.Body>
          <Card.Title>Morty</Card.Title>
          <Card.Text>Humano</Card.Text>
          <Card.Text>Status: Alive</Card.Text>
          <ListGroup className="mb-3"> 
              <ListGroup.Item>Ultima Localização: unknown</ListGroup.Item>
            </ListGroup>
        </Card.Body>
      </Card>
      </Link>
  </Col>
  </>
  )
};
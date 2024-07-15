import { Button, Card, ListGroup, Col } from "react-bootstrap";
import Logo from '../../assets/Rick_and_Morty.svg'
import './styles.css'


export const CardCharacter = () => {
  return(
  <>
  <Col md={3} className="mb-3">
    <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={Logo} />
        <Card.Body>
          <Card.Title>Morty</Card.Title>
          <Card.Text>Humano</Card.Text>
          <Card.Text>Status: Alive</Card.Text>
          <ListGroup className="mb-3"> 
              <ListGroup.Item>Ultima Localização: unknown</ListGroup.Item>
            </ListGroup>
          <Button variant="primary">Detalhes</Button>
        </Card.Body>
      </Card>
  </Col>
  </>
  )
};
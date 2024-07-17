import { Card, Col, ListGroup } from "react-bootstrap"
import { Link } from "react-router-dom"
import './styles.css'

export const CardLocation = () => {
  return (
    <>
    <Col className="mb-5">
      <Link to='/localizacoes'>
      <Card style={{ width: '15rem' }}>
        <Card.Body className="localizacao">
          <Card.Title>The Menagerie</Card.Title>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>Tipo: Menagerie</ListGroup.Item>
            <ListGroup.Item>Dimensão: unknown</ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>
      </Link>
    </Col>
    </>
  )
}
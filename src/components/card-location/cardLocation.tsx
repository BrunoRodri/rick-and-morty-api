import { Card, Col, ListGroup } from "react-bootstrap"
import { Link } from "react-router-dom"
import './styles.css'

interface CardLocationProps {
  name: string;
  type: string;
  dimension: string;
}

export const CardLocation = ({ name, type, dimension }: CardLocationProps) => {
  return (
    <>
    <Col className="mb-5">
      <Link to='/localizacoes'>
      <Card style={{ width: '15rem' }}>
        <Card.Body className="localizacao">
          <Card.Title>{name}</Card.Title>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>Tipo: {type}</ListGroup.Item>
            <ListGroup.Item>Dimensão: {dimension}</ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>
      </Link>
    </Col>
    </>
  )
}
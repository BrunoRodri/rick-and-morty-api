import { Card, Col, ListGroup } from "react-bootstrap"
import { Link } from "react-router-dom"
import './styles.css'

interface CardLocationProps {
  id: number;
  name: string;
  type: string;
  dimension: string;
}

export const CardLocation = ({ id, name, type, dimension }: CardLocationProps) => {
  return (
    <>
    <Col className="mb-5">
      <Link to={`/localizacoes/${id}`}>
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
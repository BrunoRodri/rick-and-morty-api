import { CardCharacter } from "../../components";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import './styles.css'

export const Characters = () => {
  return(
    <Container className="body">
      <Row className="mt-5">
        <h1>Personagens</h1>
        <CardCharacter />
        <CardCharacter />
        <CardCharacter />
        <CardCharacter />
        <CardCharacter />
        <CardCharacter />
        <CardCharacter />
        <CardCharacter />
        <CardCharacter />
        <CardCharacter />
        <CardCharacter />
        <CardCharacter />
      </Row>
    </Container>
  )

};
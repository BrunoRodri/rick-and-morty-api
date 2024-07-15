import { CardCharacter } from "../../components";
import { Row, Container } from "react-bootstrap";
import './styles.css'


export const Home = () => {
  return(
    <>
    <Container>
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
    </>
  )

};
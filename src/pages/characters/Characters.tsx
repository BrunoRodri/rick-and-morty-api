import { CardCharacter } from "../../components";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { getAllCharacters, CharacterResponse } from "../../services/characters";
import { useEffect, useState } from "react";
import './styles.css'

export const Characters = () => {

  const [character, setCharacter] = useState<CharacterResponse[]>([])

  useEffect(() => {
    const getData = async () => {
      try{
        const [characterData] = await Promise.all([getAllCharacters()])
        setCharacter(characterData.results)
      } catch (error) {
        console.log('erro', error)
      } finally {
        console.log('Finalizou')
        
      }
    }
    getData()
  }, [])

  return(

    <Container className="body">
      <Row className="mt-5">
        <h1>Personagens</h1>
        {character.map((char)=> (
          
          <CardCharacter 
          key={char.id}
          id={char.id}
          name={char.name}
          image={char.image}
          species={char.species}
          status={char.status}
          location={char.location}
          />
          
        ))}
        
      </Row>
    </Container>
  )

};
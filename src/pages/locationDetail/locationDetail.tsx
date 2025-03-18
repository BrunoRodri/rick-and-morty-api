import { getLocation, LocationResponse } from "../../services/locations";
import { CardCharacter } from "../../components";
import { CharacterResponse } from "../../services/characters";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Row, Container } from "react-bootstrap";
import './style.css'

export const LocationDetails = () => {

  const { id } = useParams();
  const [location, setLocation] = useState<LocationResponse>()
  const [results, setResults] = useState<CharacterResponse[]>([])

  useEffect(() => {
    const getData = async () => {
      try{
        const data = await getLocation(id as string)

        const characters = await Promise.all(
          data.residents.map((char) =>(
          fetch(char).then((res) => res.json())
        ))
      )
        setLocation(data)
        setResults(characters)
        console.log(data)
      } catch (error) {
        console.log('erro', error)
      } finally {
        console.log('Finalizou')
        
      }
    }
    getData()
  }, [])

  return (
    <>
    <div className="character">
      <h1>Detalhes da Localização</h1>
      <div className="epi-wrapper">
        <h2>{location?.name}</h2>
        <strong>Tipo: </strong><p>{location?.type}</p>
        <strong>Dimensão: </strong><p>{location?.dimension}</p>
      </div>
    </div>
    <div className='section character'>
      <div className='episodes'>
        <h4>Residentes</h4>
      </div>
      <div className="residents-card">
        <Container className="body">
          <Row className="mt-5">
            {results.map((char) => (
              <CardCharacter 
              key={char.id}
              id={char.id}
              image={char.image}
              name={char.name}
              status={char.status}
              species={char.species}
              location={char.location}
              />
            ))}
          </Row>
        </Container>
      </div>
    </div>
    </>
  )
}
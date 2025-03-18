import { getEpisode, EpisodeResponse } from "../../services/episodes";
import { CardCharacter } from "../../components";
import { CharacterResponse } from "../../services/characters";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Row, Container } from "react-bootstrap";
import './styles.css'


export const EpisodeDetail = () => {
   
  const { id } = useParams();
  const [episode, setEpisode] = useState<EpisodeResponse>();
  const [results, setResults] = useState<CharacterResponse[]>([])

  useEffect(() => {
    const getData = async () => {
      try{
        const data = await getEpisode(id as string)

        const characters = await Promise.all(
          data.characters.map((char) =>(
          fetch(char).then((res) => res.json())
        ))
      )
        setResults(characters)
        setEpisode(data)
        console.log(data)
      } catch (error) {
        console.log('erro', error)
      } finally {
        console.log('Finalizou')
      }
    }
    getData()
  }, [])

  return(
    <>
    <div className="character">
      <h1>Detalhes do Episódio</h1>
      <div className="epi-wrapper">
        <h2>{episode?.name}</h2>
        <strong>Episódio: </strong><p>{episode?.episode}</p>
        <strong>Data de Exibição: </strong><p>{episode?.air_date}</p>
      </div>
    </div>
    <div className='section character'>
      <div className='episodes'>
        <h4>Personagens</h4>
      </div>

      <div className="char-card">
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


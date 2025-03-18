import './styles.css'
import { getCharacter, CharacterResponse } from '../../services/characters'
import { CardEpisode } from '../../components'
import { EpisodeResponse } from '../../services/episodes'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Row, Container } from "react-bootstrap";

export const CharacterDetail = () => {

  const { id } = useParams();
  const [character, setCharacter] = useState<CharacterResponse>()
  const [results, setResults] = useState<EpisodeResponse[]>([])


  useEffect(() => {
    const getData = async () => {
      try{
        const data = await getCharacter(id as string)
        const episode = await Promise.all(
          data.episode.map((epi)=>(
             fetch(epi).then((res) => res.json())
        ))
      )
        setResults(episode)
        setCharacter(data)
        
      } catch (error) {
        console.log('erro', error)
      } finally {
        // console.log('Finalizou')
      }
    }
    getData()
  }, [])

  return(
  <>
  
    <div className='character'>
      <h1>Detalhes do Personagem</h1>
      <div className='char-wrapper'>
        <div className='info'>
          <h2>{character?.name}</h2>
          <h3>Status: {character?.status}</h3>
          <strong>Espécie: </strong><p>{character?.species}</p>
          <strong>Origem: </strong><p>{character?.origin?.name}</p>
          <strong>Última Localização: </strong><p>{character?.location?.name}</p>
        </div>
        <div className='image'><img src={character?.image} alt="" /></div>
      </div>
    </div>
    <div className='section'>
      <div className='episodes'>
        <h4>{character?.name} aparece nos seguintes episódios:</h4>
      </div>

      <div className="episode-card">
        <Container className="body">
          <Row className="mt-5">
            {results?.map((epi)=>(
              <CardEpisode
                key={epi.id}
                id={epi.id}
                name={epi.name}
                air_date={epi.air_date}
                episode={epi.episode}
                url={epi.url}
                />
            ))}
          </Row>
        </Container>
      </div>  
    </div>
    
  </>
  )
}
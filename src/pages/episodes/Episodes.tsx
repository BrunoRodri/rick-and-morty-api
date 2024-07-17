import { Container, Row } from 'react-bootstrap';
import { CardEpisode } from '../../components'
import { getEpisodes, EpisodeResponse } from '../../services/episodes';
import { useEffect, useState } from 'react';

export const Episodes = () => {

  const [episodes, setEpisodes] = useState<EpisodeResponse[]>([]);
  

  useEffect(() => {
    const getData = async () => {
      try {
        const [episodeData] = await Promise.all([getEpisodes()])

       setEpisodes(episodeData.results)
      } catch (error) {
        console.log('Erro', error)
      } finally {
        console.log('Finalizou')
  
      };
    }
    getData();
  },[]);

  return(
    <>
    <Container className="body">
      <Row className="mt-5">
        <h1>Episódios</h1>
        {episodes.map((epi)=> (
          <CardEpisode
          key={epi.id}
          name={epi.name}
          air_date={epi.air_date}
          episode={epi.episode}
          />
        ))}
      </Row>
    </Container>
    </>
  )
};
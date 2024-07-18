import { getEpisode, EpisodeResponse } from "../../services/episodes";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './styles.css'


export const EpisodeDetail = () => {
   
  const { id } = useParams();
  const [episode, setEpisode] = useState<EpisodeResponse>();

  useEffect(() => {
    const getData = async () => {
      try{
        const data = await getEpisode(id as string)
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
    </div>
    </>
  )
}


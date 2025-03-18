import { Container, Row, Pagination } from 'react-bootstrap';
import { CardEpisode } from '../../components'
import { getAllEpisodes, EpisodeResponse } from '../../services/episodes';
import { useEffect, useState } from 'react';

export const Episodes = () => {

  const [episodes, setEpisodes] = useState<EpisodeResponse[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  

  useEffect(() => {
    const getData = async () => {
      try {
        const [episodeData] = await Promise.all([getAllEpisodes(page)])

       setEpisodes(episodeData.results)
       setTotalPages(episodeData.info.pages)
      } catch (error) {
        console.log('Erro', error)
      }
    }
    getData();
  },[page]);

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setPage(newPage);
    }
  };

  return(
    <>
    <Container className="body">
      <Row className="mt-5">
        <h1 className='titulo'>Episódios</h1>
        {episodes.map((epi)=> (
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

      <Pagination className="justify-content-center mt-4">
        <Pagination.Prev
          onClick={() => handlePageChange(page - 1)}
          disabled={page === 1}
        />
        {Array.from({ length: totalPages }, (_, index) => {
          const pageNumber = index + 1;
          // Mostrar apenas algumas páginas ao redor da página atual
          if (
            pageNumber === 1 ||
            pageNumber === totalPages ||
            (pageNumber >= page - 2 && pageNumber <= page + 2)
          ) {
            return (
              <Pagination.Item
                key={pageNumber}
                active={pageNumber === page}
                onClick={() => handlePageChange(pageNumber)}
              >
                {pageNumber}
              </Pagination.Item>
            );
          }
          return null;
        })}
        <Pagination.Next
          onClick={() => handlePageChange(page + 1)}
          disabled={page === totalPages}
        />
      </Pagination>
    </Container>
    </>
  )
};
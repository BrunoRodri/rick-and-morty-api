import { CardCharacter } from "../../components";
import { Container, Pagination } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { getAllCharacters, CharacterResponse } from "../../services/characters";
import { useEffect, useState } from "react";
import './styles.css'

export const Characters = () => {

  const [character, setCharacter] = useState<CharacterResponse[]>([])
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const getData = async () => {
      try{
        const [characterData] = await Promise.all([getAllCharacters(page)])
        setCharacter(characterData.results)
        setTotalPages(characterData.info.pages)
        
      } catch (error) {
        console.log('erro', error)
      }
    }
    getData()
  }, [page]);

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setPage(newPage);
    }
  };

  return(

    <Container className="body">
      <Row className="mt-5">
        <h1 className="titulo">Personagens</h1>
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
  )

};
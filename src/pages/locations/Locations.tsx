import { Container, Row, Pagination } from "react-bootstrap"
import { CardLocation } from "../../components"
import { getAllLocation, LocationResponse } from "../../services/locations";
import { useEffect, useState } from "react";
import './style.css'

export const Locations = () => {

  const [location, setLocation] = useState<LocationResponse[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const getData = async () => {
      try {
        console.log('Iniciou')
        const [locationData] = await Promise.all([getAllLocation(page)])

        setLocation(locationData.results)
        setTotalPages(locationData.info.pages)
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
        <h1 className="titulo">Localizações</h1>
        {location.map((loc)=> (
          <CardLocation
          key={loc.id}
          id={loc.id} 
          name={loc.name}
          type={loc.type}
          dimension={loc.dimension}
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
import { Container, Row } from "react-bootstrap"
import { CardLocation } from "../../components"
import { getAllLocation, LocationResponse } from "../../services/locations";
import { useEffect, useState } from "react";

export const Locations = () => {

  const [location, setLocation] = useState<LocationResponse[]>([]);

  useEffect(() => {
    const getData = async () => {
      try {
        console.log('Iniciou')
        const [locationData] = await Promise.all([getAllLocation()])

        setLocation(locationData.results)
      } catch (error) {
        console.log('Erro', error)
      } finally {
        console.log('Finalizou')
  
      }
    }
    getData();
  },[]);

  return(
    <>
    <Container className="body">
      <Row className="mt-5">
        <h1>Localizações</h1>
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
    </Container>
    </>
  )
};
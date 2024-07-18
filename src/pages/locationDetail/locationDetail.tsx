import { getLocation, LocationResponse } from "../../services/locations";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export const LocationDetails = () => {

  const { id } = useParams();
  const [location, setLocation] = useState<LocationResponse>()

  useEffect(() => {
    const getData = async () => {
      try{
        const data = await getLocation(id as string)
        setLocation(data)
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
    </div>
    </>
  )
}
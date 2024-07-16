import { Header } from '../../components/header'
import { Outlet } from 'react-router-dom'
import './wrapper.css'

export const Wrapper = (): JSX.Element => (
  <>
    <Header />
    
    <Outlet />
    
  </>
)
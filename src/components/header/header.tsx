import { Navbar, Nav } from "react-bootstrap";
import Logo from '../../assets/Rick_and_Morty.svg'
import { Link } from "react-router-dom";
import './styles.css'


export const Header = () => {
  return (
    <Navbar className="bg-body-tertiary">
        <Navbar.Brand><Link to='/'><img src={Logo} alt="" /></Link></Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
              <Nav><Link to='/personagens'>Personagens</Link></Nav>
              <Nav><Link to='/episodios'>Episódios</Link></Nav>
              <Nav><Link to='/localizacoes'>Localizações</Link></Nav>
          </Nav>
        </Navbar.Collapse>   
    </Navbar>

  )

}
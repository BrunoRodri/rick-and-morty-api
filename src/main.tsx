import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Wrapper } from './shared/wrapper';
import { Home, Episodes, Locations, Characters } from './pages';
import 'bootstrap/dist/css/bootstrap.min.css';
import  GlobalStyles  from './styles/global';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Wrapper />} > 
          <Route  index element={<Home />} />
          <Route path="/personagens" element={<Characters />} />
          <Route path="/episodios" element={<Episodes />} />
          <Route path="/localizacoes" element={<Locations />} />   
        </Route>
      </Routes>   
    </BrowserRouter>
    <GlobalStyles />
  </React.StrictMode>,
)

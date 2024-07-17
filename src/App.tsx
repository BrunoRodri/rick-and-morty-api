import 'bootstrap/dist/css/bootstrap.min.css';
import { Wrapper } from './shared/wrapper';
import { Outlet } from 'react-router-dom';


function App() {
  return (
    <>
      <Outlet/>
    </>
  )
}

export default App

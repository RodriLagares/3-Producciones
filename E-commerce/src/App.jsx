
import './App.css';
import TitleComponent from './components/TitleComponent';
import NavBar from './components/NavBar';
import image from "./assets/img/Logo.png";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import HomeView from './views/HomeView'
import HomeProducts from './views/HomeProduct'
import HomeServices from './views/HomeServices'
import HomeContact from './views/HomeContact'


function App() {
  const listaTitulo = ['Productos'];
  return (
    <>
    <BrowserRouter>
    <NavBar logo={image}/>
    <Routes>
    <Route exact path= "/" element={<HomeView/>}/>
    <Route exact path= "/productos" element={<HomeProducts/>}/>
    <Route exact path= "/servicios" element={<HomeServices/>}/>
    <Route exact path= "/contacto" element={<HomeContact/>}/>
    </Routes>
    </BrowserRouter>
    {/* <TitleComponent  texto="Productos 🛍️" /> */}
    </>
  );
}

export default App;

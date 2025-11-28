
import './App.css';
import TitleComponent from './components/TitleComponent';
import NavBar from './components/NavBar';
import image from "./assets/img/Logo.png";




function App() {
  const listaTitulo = ['Productos'];
  return (
    <>
    <NavBar logo={image}/>
    <TitleComponent  texto="Productos 🛍️" />
    </>
  );
}

export default App;

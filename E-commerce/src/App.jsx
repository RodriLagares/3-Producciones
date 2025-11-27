
import './App.css';
import TitleComponent from './components/TitleComponent';
import NavBar from './components/NavBar';
import logo from '../assets/img/Logo.png';


function App() {
  const listaTitulo = ['Productos'];
  return (
    <>
    <NavBar Logo={logo}/>
    <TitleComponent texto={listaTitulo[0]}/>
    <TitleComponent texto={listaTitulo[1]}/>
    <TitleComponent texto={listaTitulo[2]}/>
    </>
  );
}

export default App;

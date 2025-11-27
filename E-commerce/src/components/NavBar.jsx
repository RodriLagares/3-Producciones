import './NavBar.css'
import GenericButton from './GenericButton';

export default function Navbar(Logosrc){ 
    return(
        <nav className="nav-container">
            <div className='Logo'>
                <img src= {Logosrc} alt="Logo E-commerce" />
            </div>
            <GenericButton name= "Inicio" color="white" />
            <GenericButton name = "Productos" color="white" />
            <GenericButton name = "Contacto" color="white" />
        </nav>
    )
}



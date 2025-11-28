import './NavBar.css'
import GenericButton from './GenericButton';


export default function Navbar({logo}){ 
    return(
        <nav className="nav-container">
            <div className='logo'>
                <img src= {logo} alt="Logo E-commerce" className='logo-img' />
            </div>
            <GenericButton name= "Inicio" color="white" />
            <GenericButton name = "Productos" color="white" />
            <GenericButton name = "Contacto" color="white" />
        </nav>
    )
}



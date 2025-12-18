import './NavBar.css'
import { Link } from 'react-router-dom';


export default function Navbar({logo}){ 
    return(
        <>
        <nav>
        <link to="/">
        <button>
            <img 
            style={{width: 60}}
            src='../img/Logo.png'
            alt='Home'
            />
        </button>
        </link>
        <button>
            <Link to="HomeContact">Contacto</Link>
        </button>
        <button>
            <Link to="HomeProduct">Productos</Link>
        </button>
        <button>
            <Link to="HomeServices">Servicios</Link>
        </button>
        <button>
            <Link to="HomeView">Home</Link>
        </button>
        </nav>
        </>
    )
}

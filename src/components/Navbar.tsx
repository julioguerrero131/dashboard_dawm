import { FaBars, FaTimes } from "react-icons/fa"
import { useRef } from "react"
import '../styles/NavBar.css'


export default function Navbar() {

  const navRef = useRef<HTMLDivElement>(null)

  const showNavBar = () => {
    navRef.current.classList.toggle("responsive_nav")
  }

  return (
    <header>
      <h3>Logo</h3>
      <nav ref={navRef}>
        <a href="#" onClick={showNavBar}>Inicio</a>
        <a href="#" onClick={showNavBar}>Indicadores</a>
        <a href="#" onClick={showNavBar}>Tabla</a>
        <a href="#" onClick={showNavBar}>Gráfico</a>
        <button className="nav-btn nav-close-btn" onClick={showNavBar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavBar}>
        <FaBars />
      </button>
    </header>
  )
}

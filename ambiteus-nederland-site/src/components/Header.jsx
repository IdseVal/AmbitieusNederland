import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../assets/images/AmbitieusNederlandVlag.png';

function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <Link to="/" className="logo">
          <img src={logo} alt="Ambitieus Nederland" className="logo-image" />
          <span>Ambitieus Nederland</span>
        </Link>
        <ul className="nav-links">
          <li><Link to="/visie">Visie</Link></li>
          <li><Link to="/grote-werken">Grote Werken</Link></li>
          <li><Link to="/over-ons">Over Ons</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

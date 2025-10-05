import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <Link to="/" className="logo">Ambitieus Nederland</Link>
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

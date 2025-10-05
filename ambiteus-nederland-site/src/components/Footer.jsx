import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Ambitieus Nederland. Alle rechten voorbehouden.</p>
        <p className="footer-email">
          <a href="mailto:ambitieusnederland@gmail.com">ambitieusnederland@gmail.com</a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;

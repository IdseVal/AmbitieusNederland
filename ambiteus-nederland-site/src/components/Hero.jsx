import './Hero.css';

function Hero({ image, title, subtitle }) {
  return (
    <section className="hero">
      <div className="hero-image-container">
        <img src={image} alt="Dutch Ambition" className="hero-image" />
        <div className="hero-overlay"></div>
      </div>
      <div className="hero-content">
        <h1 className="hero-title">{title}</h1>
        {subtitle && <p className="hero-subtitle">{subtitle}</p>}
      </div>
    </section>
  );
}

export default Hero;

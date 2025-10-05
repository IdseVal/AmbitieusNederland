import { useState } from 'react';
import './ImageCarousel.css';

function ImageCarousel({ images, title }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  if (!images || images.length === 0) {
    return null;
  }

  return (
    <div className="carousel">
      {title && <h3 className="carousel-title">{title}</h3>}
      <div className="carousel-inner">
        <button className="carousel-btn prev" onClick={goToPrevious} aria-label="Previous image">
          &#8249;
        </button>

        <div className="carousel-image-container">
          <img
            src={images[currentIndex].src}
            alt={images[currentIndex].alt || `Slide ${currentIndex + 1}`}
            className="carousel-image"
          />
          {images[currentIndex].caption && (
            <div className="carousel-caption">
              <p>{images[currentIndex].caption}</p>
            </div>
          )}
        </div>

        <button className="carousel-btn next" onClick={goToNext} aria-label="Next image">
          &#8250;
        </button>
      </div>

      <div className="carousel-dots">
        {images.map((_, index) => (
          <button
            key={index}
            className={`carousel-dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default ImageCarousel;

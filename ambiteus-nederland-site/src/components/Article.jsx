import './Article.css';

/**
 * Article component - Displays article content in Visie-style layout
 *
 * @param {Object} props
 * @param {string} props.title - The article title
 * @param {Array} props.sections - Array of sections, each with title, content array, and optional image
 * @param {string} props.image - Optional hero image URL
 * @param {Object} props.imageMap - Map of image filenames to imported image URLs
 */
function Article({ title, sections, image, imageMap = {} }) {
  return (
    <div className="article-page">
      {image && (
        <div className="article-hero">
          <img src={image} alt={title} className="article-hero-image" />
          <div className="article-hero-overlay"></div>
        </div>
      )}

      <div className="page-header">
        <h1>{title}</h1>
        <div className="header-line"></div>
      </div>

      <div className="content-container">
        {sections.map((section, index) => (
          <section key={index} className="article-section">
            <h2>{section.title}</h2>
            {section.content.map((paragraph, pIndex) => (
              <p key={pIndex}>{paragraph}</p>
            ))}
            {section.image && (
              <figure className="section-image">
                <img
                  src={imageMap[section.image.src] || section.image.src}
                  alt={section.image.alt || section.title}
                />
                {section.image.caption && (
                  <figcaption>{section.image.caption}</figcaption>
                )}
              </figure>
            )}
          </section>
        ))}
      </div>
    </div>
  );
}

export default Article;

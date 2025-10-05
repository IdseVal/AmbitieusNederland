import './TextSection.css';

function TextSection({ title, content, align = 'left' }) {
  return (
    <section className={`text-section ${align}`}>
      <div className="text-section-content">
        {title && <h2 className="text-section-title">{title}</h2>}
        <div className="text-section-body">
          {content}
        </div>
      </div>
    </section>
  );
}

export default TextSection;

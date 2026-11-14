import { Link } from 'react-router-dom';

const DEGREES_PER_CARD = 120;

export default function CardsCarousel({ cards, selectedIndex, hoveredId, onHoverChange }) {
  const rotation = -DEGREES_PER_CARD * selectedIndex;

  return (
    <div className="cardsCarousel" style={{ transform: `translateZ(-40vw) rotateY(${rotation}deg)` }}>
      {cards.map((card) => (
        <Link
          key={card.id}
          to={card.to}
          id={card.id}
          className={card.id === hoveredId ? 'card CardHovered' : 'card'}
          onMouseEnter={() => onHoverChange(card.id)}
          onMouseLeave={() => onHoverChange(null)}
        >
          <img className="cardBackground" src={card.background} alt={card.backgroundAlt} loading="lazy" />
          <img className="cardImage" src={card.image} alt={card.imageAlt} loading="lazy" />
        </Link>
      ))}
    </div>
  );
}

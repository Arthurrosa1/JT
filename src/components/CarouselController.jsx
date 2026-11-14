export default function CarouselController({ count, selectedIndex, onSelect }) {
  return (
    <div className="controller">
      {Array.from({ length: count }, (_, index) => (
        <button
          key={index}
          type="button"
          className={index === selectedIndex ? 'controllerButton ControllerButtonActive' : 'controllerButton'}
          onClick={() => onSelect(index)}
          aria-pressed={index === selectedIndex}
        >
          {String(index + 1).padStart(2, '0')}
        </button>
      ))}
      <div className="controllerLine" />
    </div>
  );
}

import { Link, NavLink } from 'react-router-dom';

export default function Navigator({ sectionId, section }) {
  const { navIcon, navListClassName, seasons, hideSeasonLinks } = section;

  return (
    <nav className="navigator">
      <div className={navIcon.className}>
        <Link to="/">
          <img src={navIcon.src} alt={navIcon.alt} />
        </Link>
      </div>
      <ul className={navListClassName || undefined}>
        {!hideSeasonLinks &&
          seasons.map((_, index) => (
            <li key={index}>
              <NavLink to={`/${sectionId}/${index + 1}`}>{String(index + 1).padStart(2, '0')}</NavLink>
            </li>
          ))}
      </ul>
    </nav>
  );
}

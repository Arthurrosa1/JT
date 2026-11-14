import { Link } from 'react-router-dom';

import ThemeToggle from './ThemeToggle.jsx';

export default function Menu() {
  return (
    <nav className="menu">
      <ul>
        <li className="menuItem"><Link to="/">HOME PAGE</Link></li>
        <li className="menuItem"><Link to="/boston/1">BOSTON CELTICS</Link></li>
        <li className="menuItem menuItemIcon"><img src="/assets/images/jt.png" alt="Jayson Tatum Icon" /></li>
        <li className="menuItem"><Link to="/duke">DUKE UNIVERSITY</Link></li>
        <li className="menuItem"><Link to="/usa/1">USA TEAM</Link></li>
      </ul>

      <ThemeToggle />
    </nav>
  );
}

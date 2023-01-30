import { NavLink } from 'react-router-dom';

const NavLinksRow = () => {
  return (
    <div style={{ display: 'flex' }}>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
    </div>
  );
};

export default NavLinksRow;

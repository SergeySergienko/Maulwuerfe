import { NavLink } from 'react-router-dom';

export const links = [
  { path: '/', label: 'Startseite' },
  { path: '/events', label: 'Veranstaltungen' },
  { path: '/team', label: 'Team' },
  { path: '/contacts', label: 'Kontakt' },
];

const NavMenu = () => {
  return (
    <div className='flex items-center hidden lg:flex'>
      {links.map((link) => (
        <NavLink
          key={link.path}
          to={link.path}
          className={({ isActive }) =>
            isActive
              ? 'mr-10 transition cursor-pointer text-white'
              : 'mr-10 transition cursor-pointer hover:text-white'
          }
        >
          {link.label}
        </NavLink>
      ))}
    </div>
  );
};

export default NavMenu;

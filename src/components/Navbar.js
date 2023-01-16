/* eslint-disable */
import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='navBar'>
      <ul>
        {links.map((link) => {
          return (
            <li key={link.id}>
              <NavLink to={link.path} activeClassName='active-link' exact>
                {link.text}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

const links = [
  {
    id: 1,
    path: '/',
    text: 'Home',
  },
  {
    id: 2,
    path: '/about',
    text: 'About',
  },
];

export default Navbar;

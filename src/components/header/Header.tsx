import React, { useState } from 'react';
import cn from 'classnames';
import { HeaderProps } from './Header.props';

import './Header.scss';
import Logo from '../../assets/svg/Movie.svg';
import HEADER_LIST from './const';

const Header = (props: HeaderProps): JSX.Element => {
  const [navClass, setNavClass] = useState(false);
  const [menuClass, setMenuClass] = useState(false);

  const toggleMenu = () => {
    setNavClass(!navClass);
    setMenuClass(!menuClass);
    if (!navClass) {
      document.body.classList.add('header-nav-open');
    } else {
      document.body.classList.remove('header-nav-open');
    }
  };

  return (
    <>
      <div className="header-nav-wrapper">
        <div className="header-bar">
          <div className="header-navbar">
            <div className="header-image">
              <img src={Logo} alt="" className="logo" />
            </div>
            <div
              id="header-mobile-menu"
              onClick={toggleMenu}
              className={cn('header-menu-toggle', {
                'is-active': menuClass
              })}
            >
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </div>
            <ul className={cn('header-nav', { 'header-mobile-nav': navClass })}>
              {HEADER_LIST.map((data) => (
                <li key={data.id} className="header-nav-item">
                  <span className="header-list-name">
                    <i className={data.iconClass}></i>
                  </span>
                  &nbsp;
                  <span className="header-list-name">{data.name}</span>
                </li>
              ))}
              <input type="text" className="search-input" placeholder="Search for a movie" />
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;

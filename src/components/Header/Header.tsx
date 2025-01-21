import {FC, useState} from 'react';
import './Header.scss';
import {VideoBackground} from '../VideoBackground';

import icon_cloud from '../../images/Header/icon-cloud.svg';
import icon_for_cloud from '../../images/Header/icon-for-cloud.svg';

import first_icon from '../../images/Header/icon-first.svg';
import second_icon from '../../images/Header/icon-second.svg';
import third_icon from '../../images/Header/icon-third.svg';
import {HeaderMobileElements} from './HeaderMobileElements';
import {MobileMenu} from './MobileMenu';

export const Header: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header className='header'>
      <VideoBackground />

      <nav className='header__nav'>
        <ul className='header__nav-list'>
          <li className='header__nav-item'>
            <a href='#' className='header__nav-link header__nav-link--active'>
              Home
            </a>
          </li>
          <li className='header__nav-item'>
            <a href='#' className='header__nav-link'>
              Shop
            </a>
          </li>
          <li className='header__nav-item'>
            <a href='#' className='header__nav-link'>
              Downloads
            </a>
          </li>
          <li className='header__nav-item'>
            <a href='#' className='header__nav-link'>
              Blog
            </a>
          </li>
          <li className='header__nav-item header__nav-item--right'>
            <a href='#' className='header__nav-lr'>
              <img
                src={icon_cloud}
                alt='icon_cloud'
                className='header__nav-lr-cloud'
              />
              <div>
                <div>
                  <div className='header__nav-lr-title'>Cloud Access</div>
                  <img
                    src={icon_for_cloud}
                    alt='icon_for_cloud'
                    className='header__nav-lr-icon'
                  />
                </div>
                <div className='header__nav-lr-description'>
                  Log in to Busy Cloud to control your device via API and MQTT
                </div>
              </div>
            </a>
          </li>
        </ul>
      </nav>

      <HeaderMobileElements toggleMenu={toggleMenu} />

      {isMenuOpen && <MobileMenu closeMenu={toggleMenu} />}

      <div className='header__content'>
        <h1 className='header__content-title'>
          <span className='header__content-title-special'>
            Busy Status Bar{' '}
          </span>
          is a productivity multi-tool device with an LED pixel screen. Displays
          a personal busy message. Built-in Pomodoro timer and Apps. Fully
          customizable, open-source, and hacker-friendly.
        </h1>
        <div className='header__content-wrapper-button'>
          <button className='header__content-button'>Buy</button>
        </div>
      </div>
      <div className='header__footer'>
        <div className='header__footer-item'>
          <img
            src={first_icon}
            alt='Productivity tool'
            className='header__footer-icon'
          />
          <div className='header__footer-info'>
            <div className='header__footer-title'>Productivity tool</div>
            <div className='header__footer-description'>
              Time management apps, custom busy message, Pomodoro focus timer
            </div>
          </div>
        </div>
        <div className='header__footer-item'>
          <img
            src={second_icon}
            alt='Apps and integration'
            className='header__footer-icon'
          />
          <div className='header__footer-info'>
            <div className='header__footer-title'>Apps and integration</div>
            <div className='header__footer-description'>
              App Library, connection to 3rd party software, integrations with
              calendar events and calls
            </div>
          </div>
        </div>
        <div className='header__footer-item'>
          <img
            src={third_icon}
            alt='Developer friendly'
            className='header__footer-icon'
          />
          <div className='header__footer-info'>
            <div className='header__footer-title'>Developer friendly</div>
            <div className='header__footer-description'>
              Open HTTP API, open-source SDK, Python / Go / JavaScript libs,
              MQTT, no vendor lock-in
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

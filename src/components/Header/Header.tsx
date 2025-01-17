import {FC} from 'react';
import './Header.scss';
import {VideoBackground} from '../VideoBackground';

import icon_cloud from '../../images/icon-cloud.svg';
import icon_for_cloud from '../../images/icon-for-cloud.svg';

import first_icon from '../../images/icon-first.svg';
import second_icon from '../../images/icon-second.svg';
import third_icon from '../../images/icon-third.svg';

export const Header: FC = () => {
  return (
    <header className='header'>
      <VideoBackground />

      <nav className='header-nav'>
        <ul className='header-nav__list'>
          <li className='header-nav__item'>
            <a href='#' className='header-nav__link--active'>
              Home
            </a>
          </li>
          <li className='header-nav__item'>
            <a href='#' className='header-nav__link'>
              Shop
            </a>
          </li>
          <li className='header-nav__item'>
            <a href='#' className='header-nav__link'>
              Downloads
            </a>
          </li>
          <li className='header-nav__item'>
            <a href='#' className='header-nav__link'>
              Block
            </a>
          </li>
          <li className='header-nav__item header-nav__item--right'>
            <a href='#' className='header-nav__link'>
              <img
                src={icon_cloud}
                alt='icon_cloud'
                className='header-nav__link-cloud'
              />
              <div className='header-nav__link'>
                Cloud Access
                <img src={icon_for_cloud} alt='icon_for_cloud' />
              </div>
              <div className='header-nav__link-description'>
                Log in to Busy Cloud to control your device via API and MQTT
              </div>
            </a>
          </li>
        </ul>
      </nav>

      <div className='header-content'>
        <h1 className='header-content__title'>
          <span className='header-content__title-special'>
            Busy Status Bar{' '}
          </span>
          is a productivity multi-tool device with an LED pixel screen. Displays
          a personal busy message. Built-in Pomodoro timer and Apps. Fully
          customizable, open-source, and hacker-friendly.
        </h1>
        <div className='header-content__wrapper-button'>
          <button className='header-content__button'>Buy</button>
        </div>
      </div>
      <div className='header-footer'>
        <div className='header-footer__item'>
          <img
            src={first_icon}
            alt='Productivity tool'
            className='header-footer__icon'
          />
          <div className='header-footer__info'>
            <div className='header-footer__titile'>Productivity tool</div>
            <div className='header-footer__description'>
              Time management apps, custom busy message, Pomodoro focus timer
            </div>
          </div>
        </div>
        <div className='header-footer__item'>
          <img
            src={second_icon}
            alt='Apps and integration'
            className='header-footer__icon'
          />
          <div className='header-footer__info'>
            <div className='header-footer__titile'>Apps and integration</div>
            <div className='header-footer__description'>
              App Library, connection to 3rd party software, integrations with
              calendar events and calls
            </div>
          </div>
        </div>
        <div className='header-footer__item'>
          <img
            src={third_icon}
            alt='Developer friendly'
            className='header-footer__icon'
          />
          <div className='header-footer__info'>
            <div className='header-footer__titile'>Developer friendly</div>
            <div className='header-footer__description'>
              Open HTTP API, open-source SDK, Python / Go / JavaScript libs,
              MQTT, no vendor lock-in
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

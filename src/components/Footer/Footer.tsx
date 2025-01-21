import {FC} from 'react';

import './Footer.scss';

import icon_instagram from '../../images/Footer/instagram.svg';
import icon_x from '../../images/Footer/x.svg';
import icon_tiktok from '../../images/Footer/tiktok.svg';
import icon_youtube from '../../images/Footer/youtube.svg';

export const Footer: FC = () => {
  return (
    <div className='footer'>
      <nav className='footer-nav'>
        <ul className='footer-nav__list'>
          <li className='footer-nav__item'>
            <a href='#' className='footer-nav__link'>
              Shop
            </a>
          </li>
          <li className='footer-nav__item'>
            <a href='#' className='footer-nav__link'>
              Downloads
            </a>
          </li>
          <li className='footer-nav__item'>
            <a href='#' className='footer-nav__link'>
              Blog
            </a>
          </li>
          <li className='footer-nav__item'>
            <a href='#' className='footer-nav__link'>
              About Us
            </a>
          </li>
          <li className='footer-nav__item'>
            <a href='#' className='footer-nav__link'>
              Contacts
            </a>
          </li>
          <li className='footer-nav__item'>
            <a href='#' className='footer-nav__link'>
              Privacy Policy
            </a>
          </li>
        </ul>
      </nav>

      <div className='footer__social'>
        <img
          src={icon_instagram}
          alt='icon instagram'
          className='footer__social-icon'
        />
        <img src={icon_x} alt='icon x' className='footer__social-icon' />
        <img
          src={icon_tiktok}
          alt='icon tiktok'
          className='footer__social-icon'
        />
        <img
          src={icon_youtube}
          alt='icon youtube'
          className='footer__social-icon'
        />
      </div>

      <div className='footer__wrapper'>
        <img src='' alt='' className='footer__image' />
      </div>

      <div className='footer__texts'>
        <p className='footer__item'>Designed by Flipper Devices Inc.</p>
        <p className='footer__item'>
          © 2024. All rights reserved.2803 Philadelphia Pike, Suite B #551
        </p>
        <p className='footer__item'>Claymont, DE 19703, USA</p>
        <p className='footer__item'>D-U-N-S number: 11-765-8681</p>
      </div>
    </div>
  );
};

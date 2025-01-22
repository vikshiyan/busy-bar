import {FC} from 'react';

import './Footer.scss';

import icon_instagram from '../../images/Footer/instagram.svg';
import icon_x from '../../images/Footer/x.svg';
import icon_tiktok from '../../images/Footer/tiktok.svg';
import icon_youtube from '../../images/Footer/youtube.svg';

import flipper_devices from '../../images/Footer/flipper_devices_logo.svg';

export const Footer: FC = () => {
  return (
    <div className='footer'>
      <nav className='footer__nav'>
        <ul className='footer__nav-list'>
          <li className='footer__nav-item'>
            <a href='#' className='footer__nav-link'>
              Shop
            </a>
          </li>
          <li className='footer__nav-item'>
            <a href='#' className='footer__nav-link'>
              Downloads
            </a>
          </li>
          <li className='footer__nav-item'>
            <a href='#' className='footer__nav-link'>
              Blog
            </a>
          </li>
        </ul>
        <ul className='footer__nav-list'>
          <li className='footer__nav-item'>
            <a href='#' className='footer__nav-link'>
              About Us
            </a>
          </li>
          <li className='footer__nav-item'>
            <a href='#' className='footer__nav-link'>
              Contacts
            </a>
          </li>
          <li className='footer__nav-item'>
            <a href='#' className='footer__nav-link'>
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
        <img
          src={flipper_devices}
          alt='flipper devices'
          className='footer__image'
        />
      </div>

      <div className='footer__text'>
        <p className='footer__text-item'>Designed by Flipper Devices Inc.</p>
        <p className='footer__text-item'>© 2024. All rights reserved.</p>
      </div>

      <div className='footer__text'>
        <p className='footer__text-item'>
          2803 Philadelphia Pike, Suite B #551
        </p>
        <p className='footer__text-item'>Claymont, DE 19703, USA</p>
        <p className='footer__text-item'>D-U-N-S number: 11-765-8681</p>
      </div>
    </div>
  );
};

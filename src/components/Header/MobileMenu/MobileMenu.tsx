import './MobileMenu.scss';

import icon_close from '../../../images/icon_close.svg';
import icon_arrow from '../../../images/icon__arrow.svg';

import icon_cloud from '../../../images/icon-cloud.svg';

type Props = {
  closeMenu: () => void;
};

export const MobileMenu: React.FC<Props> = ({closeMenu}) => {
  return (
    <aside className='mobile-menu'>
      <button className='mobile-menu__close' onClick={closeMenu}>
        <img src={icon_close} alt='icon close' />
      </button>

      <nav className='mobile-menu-nav'>
        <a href='#' className='mobile-menu-nav__link'>
          <div className='mobile-menu-nav__block'>
            <span className='mobile-menu-nav__title'>Home</span>
            <img
              src={icon_arrow}
              alt='icon arrow'
              className='mobile-menu-nav__icon'
            />
          </div>
        </a>
        <a href='#' className='mobile-menu-nav__link'>
          <div className='mobile-menu-nav__block'>
            <span className='mobile-menu-nav__title'> Shop</span>
            <img
              src={icon_arrow}
              alt='icon arrow'
              className='mobile-menu-nav__icon'
            />
          </div>
        </a>
        <a href='#' className='mobile-menu-nav__link'>
          <div className='mobile-menu-nav__block'>
            <span className='mobile-menu-nav__title'> Downloads</span>
            <img
              src={icon_arrow}
              alt='icon arrow'
              className='mobile-menu-nav__icon'
            />
          </div>
        </a>
        <a href='#' className='mobile-menu-nav__link'>
          <div className='mobile-menu-nav__block'>
            <span className='mobile-menu-nav__title'> Block</span>
            <img
              src={icon_arrow}
              alt='icon arrow'
              className='mobile-menu-nav__icon'
            />
          </div>
        </a>

        <a href='#' className='mobile-menu-nav__link'>
          <div className='mobile-menu-nav__lr'>
            <div className='mobile-menu-nav__lr-block'>
              <img
                src={icon_cloud}
                alt='icon_cloud'
                className='mobile-menu-nav__lr-cloud'
              />
              <div className='mobile-menu-nav__lr-title'>Busy Cloud</div>
            </div>

            <img
              src={icon_arrow}
              alt='icon arrow'
              className='mobile-menu-nav__icon'
            />
          </div>

          <div className='mobile-menu-nav__lr-description'>
            Log in to Busy Cloud to control your device via API and MQTT
          </div>
        </a>
      </nav>
    </aside>
  );
};

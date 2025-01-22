import {FC} from 'react';

import './Monochrome.scss';
import monochrome from '../../images/Monochrome/monochrome.jpg';
import display_icon from '../../images/Monochrome/display_icon.svg';
import last_block from '../../images/Monochrome/last-block.svg';

export const Monochrome: FC = () => {
  return (
    <div className='monochrome'>
      <div className='monochrome__wrapper'>
        <img
          src={monochrome}
          alt='Monochrome Background'
          className='monochrome__background-small'
        />
        <img
          src={last_block}
          alt='Monochrome Background'
          className='monochrome__background-big'
        />
      </div>
      <div className='container'>
        <div className='monochrome__info'>
          <h2 className='monochrome__title'>Monochrome back screen</h2>
          <h3 className='monochrome__subtitle'>
            Eye-friendly back screen allows to control the device and see the
            status displayed on the main screen — even when it&apos;s turned
            away from you.
          </h3>

          <div className='monochrome__display'>
            <img
              src={display_icon}
              alt='display icon'
              className='monochrome__display-icon'
            />
            <h2 className='monochrome__display-title'>
              Grayscale OLED display
            </h2>
            <h3 className='monochrome__display-subtitle'>
              1.54 inch, 160x80 px, adaptive brightness
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

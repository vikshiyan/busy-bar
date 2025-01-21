import {FC} from 'react';

import './Monochrome.scss';
import last_block from '../../images/last-block.svg';

export const Monochrome: FC = () => {
  return (
    <div className='monochrome'>
      <img
        src={last_block}
        alt='Monochrome Background'
        className='monochrome__background'
      />

      <div className='container'>
        <h2 className='monochrome__title'>Monochrome back screen</h2>
        <h3 className='monochrome__subtitle'>
          Eye-friendly back screen allows to control the device and see the
          status displayed on the main screen — even when it&apos;s turned away
          from you.
        </h3>
      </div>
    </div>
  );
};

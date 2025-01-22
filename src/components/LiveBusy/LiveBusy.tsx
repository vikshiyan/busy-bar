import {FC} from 'react';

import './LiveBusy.scss';
import busy_photo from '../../images/mobile_headset.jpg';
import {QuizBlock} from '../QuizBlock';

export const LiveBusy: FC = () => {
  return (
    <div className='busy'>
      <div className='container'>
        <h2 className='busy__title'>Live Busy status</h2>
        <div className='busy__img'>
          <img src={busy_photo} alt='busy photo' className='busy__photo' />
        </div>
        <h3 className='busy__subtitle'>
          Busy Status Bar can integrate with desktop software and automatically
          activate when you’re on a call, live on stream, recording audio or
          when a certain program is active.
        </h3>

        <div className='busy__quiz'>
          <QuizBlock />
        </div>
      </div>
    </div>
  );
};

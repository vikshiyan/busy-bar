/* eslint-disable max-len */
import {FC} from 'react';

import './ManualControls.scss';
import manual_controls from '../../images/ManualControls/manual-controls.jpg';
import icon_busy from '../../images/ManualControls/icon_busy.svg';
import icon_pomodoro from '../../images/ManualControls/icon_pomodoro.svg';
import icon_apps from '../../images/ManualControls/icon_apps.svg';
import icon_settings from '../../images/ManualControls/icon_settings.svg';
import icon_hand from '../../images/ManualControls/icon_hand.svg';
import icon_back from '../../images/ManualControls/icon_back.svg';
import icon_wheel from '../../images/ManualControls/icon_wheel.svg';

export const ManualControls: FC = () => {
  return (
    <div className='controls'>
      <div className='container'>
        <h2 className='controls__title'>Manual controls</h2>
        <h3 className='controls__subtitle'>
          Physical buttons allow to control the device manually without
          connecting to PC or mobile app. The large buttons are designed for
          easy use without looking at the device.
        </h3>

        <div className='controls__wrapper'>
          <div className='controls__lines-1'>
            <div className='controls__block-1'>
              <div className='controls__item'>
                <div className='controls__text'>
                  <img
                    src={icon_pomodoro}
                    alt='icon pomodoro'
                    className='controls__icon'
                  />
                  <h3 className='controls__heading'>Pomodoro</h3>
                </div>
                <h4 className='controls__description'>
                  Time management technique based on short intervals of focused
                  work divided by 5-minute breaks
                </h4>
              </div>
              <div className='controls__item'>
                <div className='controls__text'>
                  <img
                    src={icon_busy}
                    alt='icon busy'
                    className='controls__icon'
                  />
                  <h3 className='controls__heading'>Busy</h3>
                </div>
                <h4 className='controls__description'>
                  Active busy status message with custom design configurable for
                  your own workflow
                </h4>
              </div>
            </div>

            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='5855.99365234375 4742.9638671875 838.00634765625 378.0576171875'
              className='controls__svg'
            >
              <path
                fill='transparent'
                stroke='#000000'
                fillOpacity='1'
                strokeWidth='1'
                strokeOpacity='1'
                fillRule='evenodd'
                d='M
                5911.99 4930.24 C 5911.99 4930.24 5856.99 4930.24 5856.99 4930.24
                C 5856.99 4930.24 5856.99 4837.24 5856.99 4837.24'
              ></path>
              <path
                fill='transparent'
                stroke='#000000'
                fillOpacity='1'
                strokeWidth='1'
                strokeOpacity='1'
                fillRule='evenodd'
                d='M
              5930.99 4876.56 C 5930.99 4876.56 5930.99 4859.97 5930.99 4859.97
              C 5930.99 4859.97 6014.99 4859.97 6014.99 4859.97 C 6014.99
              4859.97 6014.99 4836.99 6014.99 4836.99'
              ></path>
              <path
                fill='transparent'
                stroke='#000000'
                fillOpacity='1'
                strokeWidth='1'
                strokeOpacity='1'
                fillRule='evenodd'
                d='M
              5931.52 5078.42 C 5931.52 5078.42 5931.52 5098.95 5931.52 5098.95
              C 5931.52 5098.95 6014.99 5098.95 6014.99 5098.95 C 6014.99
              5098.95 6014.99 5119.99 6014.99 5119.99'
              ></path>

              <path
                fill='transparent'
                stroke='#000000'
                fillOpacity='1'
                strokeWidth='1'
                strokeOpacity='1'
                d='M 5913 5027 C 5913
              5027 5858.99 5027 5858.99 5027 C 5858.99 5027 5858.99 5120.02
              5858.99 5120.02"'
              ></path>
            </svg>
            <img
              src={manual_controls}
              alt='manual controls'
              className='controls__photo-1 controls__photo'
            />
          </div>

          <div className='controls__block-2'>
            <div className='controls__item'>
              <div className='controls__text'>
                <img
                  src={icon_apps}
                  alt='icon apps'
                  className='controls__icon'
                />
                <h3 className='controls__heading'>Apps</h3>
              </div>
              <h4 className='controls__description'>
                Clock, weather, social media stats (YouTube, Instagram, TikTok),
                and more. Supports 3rd-party user applications
              </h4>
            </div>
            <div className='controls__item'>
              <div className='controls__text'>
                <img
                  src={icon_settings}
                  alt='icon settings'
                  className='controls__icon'
                />
                <h3 className='controls__heading'>Settings</h3>
              </div>
              <h4 className='controls__description'>
                Wi-Fi / Bluetooth connections, screen brightness, sound volume,
                power saving mode, etc.
              </h4>
            </div>
          </div>
        </div>

        <div className='controls__button-start'>
          <img
            src={icon_hand}
            alt='icon hand'
            className='controls__button-start-icon'
          />

          <div className='controls__button-start-info'>
            <h3 className='controls__button-start-title'>
              Start / Pause button
            </h3>
            <h4 className='controls__button-start-description'>
              Start and stop your status. Also works as an OK button in menu
            </h4>
          </div>
        </div>

        <div className='controls__photo-2-wrapper'>
          <img
            src={manual_controls}
            alt='manualcontrols'
            className='controls__photo-2 controls__photo'
          />
        </div>

        <div className='controls__button-back'>
          <div className='controls__button-back-head'>
            <img
              src={icon_back}
              alt='icon back'
              className='controls__button-back-icon'
            />
            <h3 className='controls__button-back-title'>Back button</h3>
          </div>
          <h4 className='controls__button-back-description'>
            Go back in menu and quit apps
          </h4>
        </div>

        <img
          src={manual_controls}
          alt='manualcontrols'
          className='controls__photo-3 controls__photo'
        />

        <div className='controls__scrols'>
          <img
            src={icon_wheel}
            alt='icon wheel'
            className='controls__scrols-icon'
          />

          <div className='controls__scrols-text'>
            <h3 className='controls__scrols-heading'>Scroll wheel</h3>
            <h4 className='controls__description'>
              Set timer in Busy and Pomodoro modes, navigate in menu, OK button
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

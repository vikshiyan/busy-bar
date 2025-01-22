import { FC } from 'react';
import './ManualControls.scss';
import manual_controls from '../../images/ManualControls/manual-controls.jpg';
import icon_busy from '../../images/ManualControls/icon_busy.svg';
import icon_pomodoro from '../../images/ManualControls/icon_pomodoro.svg';
import icon_apps from '../../images/ManualControls/icon_apps.svg';
import icon_settings from '../../images/ManualControls/icon_settings.svg';
import icon_hand from '../../images/ManualControls/icon_hand.svg';
import icon_back from '../../images/ManualControls/icon_back.svg';
import icon_wheel from '../../images/ManualControls/icon_wheel.svg';
import icon_selector from '../../images/ManualControls/icon_selector.svg';

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

        <div className='controls__photo-wrapper-desktop'>
          <img
            src={manual_controls}
            alt='manual controls'
            className='controls__photo-desktop'
          />
        </div>

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

            <svg // svg for mobileS
              xmlns='http://www.w3.org/2000/svg'
              viewBox='5855 4742 213.6 300'
              className='controls__svg-mobileS'
            >
              <path
                fill='transparent'
                stroke='#000000'
                fillOpacity='1'
                strokeWidth='1'
                strokeOpacity='1'
                fillRule='evenodd'
                d='M 5893.99 4850.24 H 5865 V 4800'
              ></path>
              <path
                fill='transparent'
                stroke='#000000'
                fillOpacity='1'
                strokeWidth='1'
                strokeOpacity='1'
                fillRule='evenodd'
                d='M 5905 4822 V 4810 H 5960 V 4795'
              ></path>
              <path
                fill='transparent'
                stroke='#000000'
                fillOpacity='1'
                strokeWidth='1'
                strokeOpacity='1'
                fillRule='evenodd'
                d='M 5905 4925 V 4945 H 5956 V 4965'
              ></path>
              <path
                fill='transparent'
                stroke='#000000'
                fillOpacity='1'
                strokeWidth='1'
                strokeOpacity='1'
                d='M 5895 4899.5 H 5859.5 V 4965'
              ></path>
            </svg>
            <svg // svg for mobileM
              xmlns='http://www.w3.org/2000/svg'
              viewBox='5855 4742 213.6 300'
              className='controls__svg-mobileM'
            >
              <path
                fill='transparent'
                stroke='#000000'
                fillOpacity='1'
                strokeWidth='1'
                strokeOpacity='1'
                fillRule='evenodd'
                d='M 5894 4852 H 5865 V 4800'
              ></path>
              <path
                fill='transparent'
                stroke='#000000'
                fillOpacity='1'
                strokeWidth='1'
                strokeOpacity='1'
                fillRule='evenodd'
                d='M 5905 4822 V 4810 H 5977 V 4795'
              ></path>
              <path
                fill='transparent'
                stroke='#000000'
                fillOpacity='1'
                strokeWidth='1'
                strokeOpacity='1'
                fillRule='evenodd'
                d='M 5904.5 4930 V 4945 H 5977 V 4970'
              ></path>
              <path
                fill='transparent'
                stroke='#000000'
                fillOpacity='1'
                strokeWidth='1'
                strokeOpacity='1'
                d='M 5895 4903 H 5859.5 V 4965'
              ></path>
            </svg>
            <svg // svg for mobileL
              xmlns='http://www.w3.org/2000/svg'
              viewBox='5855 4742 213.6 300'
              className='controls__svg-mobileL'
            >

              <path
                fill='transparent'
                stroke='#000000'
                fillOpacity='1'
                strokeWidth='1'
                strokeOpacity='1'
                fillRule='evenodd'
                d='M 5893.99 4850.24 H 5865 V 4795'
              ></path>
              <path
                fill='transparent'
                stroke='#000000'
                fillOpacity='1'
                strokeWidth='1'
                strokeOpacity='1'
                fillRule='evenodd'
                d='M 5906.5 4822 V 4810 H 6000 V 4795'
              ></path>
              <path
                fill='transparent'
                stroke='#000000'
                fillOpacity='1'
                strokeWidth='1'
                strokeOpacity='1'
                fillRule='evenodd'
                d='M 5906 4932 V 4945 H 6001 V 4976'
              ></path>
              <path
                fill='transparent'
                stroke='#000000'
                fillOpacity='1'
                strokeWidth='1'
                strokeOpacity='1'
                d='M 5895 4899.5 H 5859.5 V 4976'
              ></path>
            </svg>
            <svg // svg for tablet
              xmlns='http://www.w3.org/2000/svg'
              viewBox='5855 4742 213.6 300'
              className='controls__svg-tablet'
            >
              <path
                fill='transparent'
                stroke='#000000'
                fillOpacity='1'
                strokeWidth='1'
                strokeOpacity='1'
                fillRule='evenodd'
                d='M 5893.99 4851.24 H 5859.5 V 4795'
              ></path>
              <path
                fill='transparent'
                stroke='#000000'
                fillOpacity='1'
                strokeWidth='1'
                strokeOpacity='1'
                fillRule='evenodd'
                d='M 5903.5 4822 V 4810 H 6020 V 4795'
              ></path>
              <path
                fill='transparent'
                stroke='#000000'
                fillOpacity='1'
                strokeWidth='1'
                strokeOpacity='1'
                fillRule='evenodd'
                d='M 5904 4932 V 4945 H 6020 V 4976'
              ></path>
              <path
                fill='transparent'
                stroke='#000000'
                fillOpacity='1'
                strokeWidth='1'
                strokeOpacity='1'
                d='M 5895 4904 H 5859.5 V 4976'
              ></path>
            </svg>
            <svg // svg for tabletBig
              xmlns='http://www.w3.org/2000/svg'
              viewBox='5855 4742 213.6 300'
              className='controls__svg-tabletBig'
            >
              <path
                fill='transparent'
                stroke='#000000'
                fillOpacity='1'
                strokeWidth='1'
                strokeOpacity='1'
                fillRule='evenodd'
                d='M 5938.99 4851.24 H 5859.5 V 4795'
              ></path>
              <path
                fill='transparent'
                stroke='#000000'
                fillOpacity='1'
                strokeWidth='1'
                strokeOpacity='1'
                fillRule='evenodd'
                d='M 5948.5 4822 V 4810 H 6062 V 4795'
              ></path>
              <path
                fill='transparent'
                stroke='#000000'
                fillOpacity='1'
                strokeWidth='1'
                strokeOpacity='1'
                fillRule='evenodd'
                d='M 5948 4935 V 4945 H 6062 V 4974'
              ></path>
              <path
                fill='transparent'
                stroke='#000000'
                fillOpacity='1'
                strokeWidth='1'
                strokeOpacity='1'
                d='M 5938.99 4906 H 5859.5 V 4976'
              ></path>
            </svg>
            <svg // svg for desktop
              xmlns='http://www.w3.org/2000/svg'
              viewBox='5855 4742 213.6 300'
              className='controls__svg-desktop'
            >
              <path
                fill='transparent'
                stroke='#000000'
                fillOpacity='1'
                strokeWidth='1'
                strokeOpacity='1'
                fillRule='evenodd'
                d='M 5893.99 4851.24 H 5859.5 V 4795'
              ></path>
              <path
                fill='transparent'
                stroke='#000000'
                fillOpacity='1'
                strokeWidth='1'
                strokeOpacity='1'
                fillRule='evenodd'
                d='M 5903.5 4822 V 4810 H 6020 V 4795'
              ></path>
              <path
                fill='transparent'
                stroke='#000000'
                fillOpacity='1'
                strokeWidth='1'
                strokeOpacity='1'
                fillRule='evenodd'
                d='M 5904 4932 V 4945 H 6020 V 4976'
              ></path>
              <path
                fill='transparent'
                stroke='#000000'
                fillOpacity='1'
                strokeWidth='1'
                strokeOpacity='1'
                d='M 5895 4904 H 5859.5 V 4976'
              ></path>
            </svg>
            <img
              src={manual_controls}
              alt='manual controls'
              className='controls__photo-1 controls__photo'
            />
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
                  Clock, weather, social media stats (YouTube, Instagram,
                  TikTok), and more. Supports 3rd-party user applications
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
                  Wi-Fi / Bluetooth connections, screen brightness, sound
                  volume, power saving mode, etc.
                </h4>
              </div>
            </div>
          </div>
        </div>

        <div className='controls__button-wrapper'>
          <div className='controls__lines-1'>
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
            <svg // svg for mobileS
              xmlns='http://www.w3.org/2000/svg'
              viewBox='5855 4742 213.6 300'
              className='controls__svg-mobileS'
            >
              <path
                fill='transparent'
                stroke='#000000'
                fillOpacity='1'
                strokeWidth='1'
                strokeOpacity='1'
                d='M 5995 4812 V 4925'
              ></path>
            </svg>
            <svg // svg for mobileM
              xmlns='http://www.w3.org/2000/svg'
              viewBox='5855 4742 213.6 300'
              className='controls__svg-mobileM'
            >
              <path
                fill='transparent'
                stroke='#000000'
                fillOpacity='1'
                strokeWidth='1'
                strokeOpacity='1'
                d='M 6020 4812 V 4925'
              ></path>
            </svg>
            <svg // svg for mobileL
              xmlns='http://www.w3.org/2000/svg'
              viewBox='5855 4742 213.6 300'
              className='controls__svg-mobileL'
            >
              <path
                fill='transparent'
                stroke='#000000'
                fillOpacity='1'
                strokeWidth='1'
                strokeOpacity='1'
                d='M 6050 4812 V 4925'
              ></path>
            </svg>
            <svg // svg for tablet
              xmlns='http://www.w3.org/2000/svg'
              viewBox='5855 4742 300.6 300'
              className='controls__svg-tablet'
            >
              <path
                fill='transparent'
                stroke='#000000'
                fillOpacity='1'
                strokeWidth='1'
                strokeOpacity='1'
                d='M 6088 4810 V 4925'
              ></path>
            </svg>
            <svg // svg for tabletBig
              xmlns='http://www.w3.org/2000/svg'
              viewBox='5855 4742 300.6 300'
              className='controls__svg-tabletBig'
            >
              <path
                fill='transparent'
                stroke='#000000'
                fillOpacity='1'
                strokeWidth='1'
                strokeOpacity='1'
                d='M 6118 4810 V 4925'
              ></path>
            </svg>
            <div className='controls__photo-2-wrapper'>
              <img
                src={manual_controls}
                alt='manualcontrols'
                className='controls__photo-2 controls__photo'
              />
            </div>
          </div>
          <div className='controls__lines-1'>
            <svg // svg for mobileS
              xmlns='http://www.w3.org/2000/svg'
              viewBox='5855 4742 269.2 378'
              className='controls__svg-mobileS'
            >
              <path
                fill='transparent'
                stroke='#000000'
                fillOpacity='1'
                strokeWidth='1'
                strokeOpacity='1'
                d='M 5920 4746 H 5875 V 4840'
              ></path>
              <path
                fill='transparent'
                stroke='#000000'
                fillOpacity='1'
                strokeWidth='1'
                strokeOpacity='1'
                d='M 5957 4935 V 5040'
              ></path>
            </svg>
            <svg // svg for mobileM
              xmlns='http://www.w3.org/2000/svg'
              viewBox='5855 4742 269.2 378'
              className='controls__svg-mobileM'
            >
              <path
                fill='transparent'
                stroke='#000000'
                fillOpacity='1'
                strokeWidth='1'
                strokeOpacity='1'
                d='M 5945 4746 H 5925 V 4840'
              ></path>
              <path
                fill='transparent'
                stroke='#000000'
                fillOpacity='1'
                strokeWidth='1'
                strokeOpacity='1'
                d='M 6006 4935 V 5040'
              ></path>
            </svg>
            <svg // svg for mobileL
              xmlns='http://www.w3.org/2000/svg'
              viewBox='5855 4742 269.2 378'
              className='controls__svg-mobileL'
            >
              <path
                fill='transparent'
                stroke='#000000'
                fillOpacity='1'
                strokeWidth='1'
                strokeOpacity='1'
                d='M 6030 4790 V 4818 H 5968 V 4840'
              ></path>
              <path
                fill='transparent'
                stroke='#000000'
                fillOpacity='1'
                strokeWidth='1'
                strokeOpacity='1'
                d='M 6051 4935 V 5020 H 5960 V 5045'
              ></path>
            </svg>
            <svg // svg for tablet
              xmlns='http://www.w3.org/2000/svg'
              viewBox='5855 4742 269.2 378'
              className='controls__svg-tablet'
            >
              <path
                fill='transparent'
                stroke='#000000'
                fillOpacity='1'
                strokeWidth='1'
                strokeOpacity='1'
                d='M 6065 4780 V 4808 H 6030 V 4833'
              ></path>
              <path
                fill='transparent'
                stroke='#000000'
                fillOpacity='1'
                strokeWidth='1'
                strokeOpacity='1'
                d='M 6115 4928 V 5020 H 5960 V 5045'
              ></path>
            </svg>
            <svg // svg for tabletBig
              xmlns='http://www.w3.org/2000/svg'
              viewBox='5855 4742 269.2 378'
              className='controls__svg-tabletBig'
            >
              <path
                fill='transparent'
                stroke='#000000'
                fillOpacity='1'
                strokeWidth='1'
                strokeOpacity='1'
                d='M 6090 4780 V 4808 H 6015 V 4833'
              ></path>
              <path
                fill='transparent'
                stroke='#000000'
                fillOpacity='1'
                strokeWidth='1'
                strokeOpacity='1'
                d='M 6102 4930 V 5020 H 5990 V 5040'
              ></path>
            </svg>
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
                  Set timer in Busy and Pomodoro modes, navigate in menu, OK
                  button
                </h4>
              </div>
            </div>
          </div>
        </div>

        <div className='controls__selector'>
          <img
            src={icon_selector}
            alt='icon selector'
            className='controls__selector-icon'
          />

          <div className='controls__selector-text'>
            <h3 className='controls__selector-heading'>5-position selector</h3>
            <h4 className='controls__selector-description'>
              Switch between modes
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

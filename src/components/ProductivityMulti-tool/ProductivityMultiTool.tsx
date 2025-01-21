import {FC} from 'react';
import './ProductivityMultiTool.scss';
import Photo_product from '../../images/photo-1.png';

import icon_fourth from '../../images/Productivity/icon-fourth.svg';
import icon_fifth from '../../images/Productivity/icon-fifth.svg';
import icon_sixth from '../../images/Productivity/icon-sixth.svg';
import photo_table from '../../images/Productivity/photo-table.svg';
// import last_block from '../../images/last-block.svg';

export const ProductivityMultiTool: FC = () => {
  return (
    <div className='productivity-display'>
      <div className='container'>
        <h2 className='productivity-display__main-title'>
          Productivity multi-tool
        </h2>
        <div className='productivity-display__container'>
          <div className='productivity-display__block'>
            <img
              src={Photo_product}
              alt='Photo product'
              className='productivity-display__photo'
            />
          </div>
        </div>
        <div
          className='productivity-display__item 
          productivity-display__first-block'
        >
          <div className='productivity-display__heading'>
            <img
              src={icon_fourth}
              alt='icon fourth'
              className='productivity-display__icon'
            />
            <h3 className='productivity-display__title'>Busy Status</h3>
          </div>
          <h4 className='productivity-display__subtitle'>
            Customizable busy status message to match your own workflow.
          </h4>

          <div>
            <div className='productivity-display__dot-text'>
              <span className='productivity-display__dot'>•</span>
              <span className='productivity-display__text'>
                Set any busy message, expiry timer and activation trigger
              </span>
            </div>

            <div className='productivity-display__dot-text'>
              <span className='productivity-display__dot'>•</span>
              <span className='productivity-display__text'>
                Upload custom busy graphics or choose from gallery
              </span>
            </div>

            <div className='productivity-display__dot-text'>
              <span className='productivity-display__dot'>•</span>
              <span className='productivity-display__text'>
                Activate manually from device or remotely from PC,
              </span>
            </div>

            <div className='productivity-display__dot-text'>
              <span className='productivity-display__dot'>•</span>
              <span className='productivity-display__text'>
                Mobile App or via APIAutomatic activation by Zoom, Discord,
                Microsoft Teams, Google Calendar
              </span>
            </div>
          </div>
        </div>

        <div className='productivity-display__item'>
          <div className='productivity-display__heading'>
            <img
              src={icon_fifth}
              alt='icon_fifth'
              className='productivity-display__icon'
            />
            <h3 className='productivity-display__title'>Apps</h3>
          </div>

          <h4 className='productivity-display__subtitle'>
            Built-in apps: clock, weather, social media metrics, currency chart,
            pixel art wallpapers, and more.
          </h4>

          <div>
            <div className='productivity-display__dot-text'>
              <span className='productivity-display__dot'>•</span>
              <span className='productivity-display__text'>
                Install JavaScript apps from community
              </span>
            </div>
            <div className='productivity-display__dot-text'>
              <span className='productivity-display__dot'>•</span>
              <span className='productivity-display__text'>
                Cloud-based Python/JavaScript/Go apps
              </span>
            </div>
          </div>
        </div>

        <div className='productivity-display__item'>
          <div className='productivity-display__heading'>
            <img
              src={icon_sixth}
              alt='icon sixth'
              className='productivity-display__icon'
            />
            <h3 className='productivity-display__title'>Pomodoro timer</h3>
          </div>

          <h4 className='productivity-display__subtitle'>
            Time management technique based on short intervals of focused work
            broken by five-minute breaks.
          </h4>

          <div>
            <div className='productivity-display__dot-text'>
              <span className='productivity-display__dot'>•</span>
              <span className='productivity-display__text'>
                Configure your own focus intervals
              </span>
            </div>
            <div className='productivity-display__dot-text'>
              <span className='productivity-display__dot'>•</span>
              <span className='productivity-display__text'>
                Integration with hourly payment time trackers
              </span>
            </div>
          </div>
        </div>

        <div className='productivity-display__developer-section'>
          <img
            src={photo_table}
            alt='photo table'
            className='productivity-display__developer-table'
          />
          <div className='productivity-display__developer-title'>
            {'>'}_ Developers friendly
          </div>

          <div className='productivity-display__developer-container'>
            <div className='productivity-display__developer-rigth'>
              <div className='productivity-display__developer-item'>
                <div className='productivity-display__developer-text'>
                  {'>'} Open HTTP API
                </div>
              </div>
              <div className='productivity-display__developer-item'>
                <div className='productivity-display__developer-text'>
                  {'>'} Bluetooth Low Energy
                </div>
              </div>
              <div className='productivity-display__developer-item'>
                <div className='productivity-display__developer-text'>
                  {'>'} Free JavaScript apps SDK
                </div>
              </div>
              <div className='productivity-display__developer-item'>
                <div className='productivity-display__developer-text'>
                  {'>'} Libs for Python/JavaScript/Go
                </div>
              </div>
              <div className='productivity-display__developer-item'>
                <div className='productivity-display__developer-text'>
                  {'>'} USB Virtual LAN device
                </div>
              </div>
              <div className='productivity-display__developer-item'>
                <div className='productivity-display__developer-text'>
                  {'>'} Self-hosted cloud provisioning
                </div>
              </div>
              <div className='productivity-display__developer-item'>
                <div className='productivity-display__developer-text'>
                  {'>'} Wi-Fi 2.4 GHz
                </div>
              </div>
            </div>

            <div className='productivity-display__developer-left'>
              <div className='productivity-display__developer-item'>
                <div className='productivity-display__developer-text'>
                  {'>'} Control via MQTT
                </div>
              </div>
              <div className='productivity-display__developer-item'>
                <div className='productivity-display__developer-text'>
                  {'>'} Serial COM port over USB
                </div>
              </div>
              <div className='productivity-display__developer-item'>
                <div className='productivity-display__developer-text'>
                  {'>'} IoT integrations: IFTTT, HomeAssistant
                </div>
              </div>
              <div className='productivity-display__developer-item'>
                <div className='productivity-display__developer-text'>
                  {'>'} No vendor lock-in
                </div>
              </div>
              <div className='productivity-display__developer-item'>
                <div className='productivity-display__developer-text'>
                  {'>'} Offline API (no internet required)
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className='productivity-display__last-block'>
        <h3 className='block-title'>Назва блоку</h3>
        <img src={last_block} alt='Опис зображення' className='block-image' />
        <p className='block-text'>
          Тут розміщуйте ваш текст, який буде пояснювати особливості та
          функціональність вашого пристрою. Ви можете додати більше інформації,
          як на зображенні.
        </p>
      </div> */}
      </div>
    </div>
  );
};

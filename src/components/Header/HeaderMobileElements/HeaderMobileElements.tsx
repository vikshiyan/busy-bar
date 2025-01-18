import './HeaderMobileElements.scss';

import icon_burger from '../../../images/icon__burger.svg';
import icon_busy from '../../../images/icon-Busy.svg';

type Props = {
  toggleMenu: () => void;
};

export const HeaderMobileElements: React.FC<Props> = ({toggleMenu}) => {
  return (
    <div className='mobile-header'>
      <img src={icon_busy} alt='icon busy' className='mobile-header__icon' />

      <button className='mobile-header__burger-button' onClick={toggleMenu}>
        <img src={icon_burger} alt='icon burger' />
      </button>
    </div>
  );
};
 
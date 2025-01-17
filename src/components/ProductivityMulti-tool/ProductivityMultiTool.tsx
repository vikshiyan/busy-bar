import {FC} from 'react';
import './ProductivityMultiTool.scss';
import Photo_product from '../../images/photo-1.png';

export const ProductivityMultiTool: FC = () => {
  return (
    <div className='productivity-display'>
      <h1 className='productivity-display__title'>Productivity multi-tool</h1>
      <img
        src={Photo_product}
        alt='Photo product'
        className='productivity-display__photo'
      />
    </div>
  );
};

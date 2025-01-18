import {FC} from 'react';
import './VideoBackground.scss';

export const VideoBackground: FC = () => {
  return (
    <div className='video-background'>
      <video
        id='html-video-781440207-1722877379854'
        playsInline
        loop
        muted
        autoPlay
        preload='none'
        className='video-background__video'
      >
        <source
          src='https://cdn.flipperzero.one/bsb_tilda_desktop_1st_vid_01.mp4'
          type='video/mp4'
        />
      </video>
    </div>
  );
};
 
import React, {useEffect, useState} from 'react';
import {classNames} from '@utils/classNames/classNames';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import './index.less';

export interface IMediaDTO {
  url: string;
  mimetype: string;
  size: {
    w: number;
    h: number;
  };
  background?: string;
  alt?: string;
}

export const useLazyImage = (media: IMediaDTO, className?: string, muiIcon?: JSX.Element) => {
  const [loaded, setLoaded] = useState<boolean>(false);

  useEffect(() => {
    const img = new Image();
    img.onload = onLoad;
    img.src = media.url;
  }, [media]);

  const onLoad = () => {
    setLoaded(true);
  };

  const LazyImage = () => {
    const cls = classNames(className, 'lazy-image');
    if (loaded) {
      return (
        <div className={cls}>
          <img className="lazy-image__img" src={media.url} alt={media.alt} />
        </div>
      );
    } else if (media.background) {
      return <div className={cls} style={{backgroundColor: media.background}} />;
    } else if (muiIcon) {
      return <div className={cls}>muiIcon</div>;
    } else {
      return (
        <div className={cls}>
          <ImageOutlinedIcon />
        </div>
      );
    }
  };

  return {loaded, LazyImage};
};

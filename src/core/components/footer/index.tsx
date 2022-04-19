import React from 'react';
import moment from 'moment';
import './index.scss';

export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__container">
        T1-v2-Shop&nbsp;&nbsp;•&nbsp;&nbsp;{moment().year()}
      </div>
    </div>
  );
};

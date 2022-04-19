import React, {FC} from 'react';
import './index.scss';

export const ErrorPage: FC = (props) => {
  const {children} = props;
  return <div className="error-page">{children}</div>;
};

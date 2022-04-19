import React from 'react';
import {Button, IButtonProps} from '../button';
import './index.scss';

interface IProps {
  icon?: JSX.Element;
  message?: string;
  button?: IButtonProps;
}

export const NoData = (props: IProps) => {
  const {icon, message = 'No data', button} = props;
  return (
    <div className="no-data">
      {icon}
      <p className="no-data__message">{message}</p>
      {button ? <Button {...button} /> : null}
    </div>
  );
};

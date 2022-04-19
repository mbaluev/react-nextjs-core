import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import './index.scss';

interface IErrorItemProps {
  message: string;
  onClose(): void;
}

export const ErrorItem = (props: IErrorItemProps) => {
  const {message, onClose} = props;
  return (
    <div className="error-item">
      <div className="error-item-message">{message}</div>
      <div className="error-item-button">
        <CloseIcon onClick={onClose} />
      </div>
    </div>
  );
};

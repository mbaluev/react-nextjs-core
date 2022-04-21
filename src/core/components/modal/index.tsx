import React, {FC, useState} from 'react';
import Draggable from 'react-draggable';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import CloseIcon from '@mui/icons-material/Close';
import {useUpdateEffect} from '@hooks/useUpdateEffect';
import {classNames} from '@utils/classNames/classNames';
import {Button, IButtonProps} from '@components/button';
import './index.scss';

interface IModalProps {
  isOpen: boolean;
  title?: string;
  className?: string;
  onClose: () => void;
  footerButtons?: IButtonProps[];
  fullScreen?: boolean;
  allowFullScreen?: boolean;
}

export const Modal: FC<IModalProps> = (props) => {
  const {
    className,
    title,
    isOpen,
    onClose,
    footerButtons,
    fullScreen,
    allowFullScreen,
    children,
  } = props;

  const [isShake, setIsShake] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(fullScreen);

  const shake = (e: any) => {
    if (e.target === e.currentTarget) setIsShake(true);
  };
  const shakeEnd = () => {
    setIsShake(false);
  };
  const fullScreenChange = () => {
    setIsFullScreen(!isFullScreen);
  };
  const onCloseHandler = () => {
    onClose();
    setIsFullScreen(fullScreen);
  };

  const draggableCls = classNames('modal-draggable', {
    'modal-draggable_full-screen': Boolean(isFullScreen),
  });

  const dialogCls = classNames('modal-dialog', className, {
    'modal-dialog_full-screen': Boolean(isFullScreen),
    'modal-dialog_shake': isShake,
  });

  useUpdateEffect(() => {
    setTimeout(() => window.dispatchEvent(new Event('resize')), 0);
  }, [isFullScreen]);

  const FullScreenIcon = () => {
    if (isFullScreen) {
      return <FullscreenExitIcon />;
    } else {
      return <FullscreenIcon />;
    }
  };

  return isOpen ? (
    <div className="modal">
      <div className="modal-backdrop" />
      <div
        className="modal-container"
        onMouseDown={shake}
        onAnimationEnd={shakeEnd}
      >
        <Draggable handle=".modal-title" bounds="parent">
          <div className={draggableCls}>
            <div className={dialogCls}>
              <div className="modal-title">
                <div className="modal-title-text">{title}</div>
                <div className="modal-title-buttons">
                  {allowFullScreen && (
                    <div
                      className="modal-title-button"
                      onClick={fullScreenChange}
                    >
                      <FullScreenIcon />
                    </div>
                  )}
                  <div className="modal-title-button" onClick={onCloseHandler}>
                    <CloseIcon />
                  </div>
                </div>
              </div>
              {children && <div className="modal-content">{children}</div>}
              {footerButtons && (
                <div className="modal-footer">
                  {footerButtons.map((button, index) => (
                    <Button key={index} {...button} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </Draggable>
      </div>
    </div>
  ) : null;
};

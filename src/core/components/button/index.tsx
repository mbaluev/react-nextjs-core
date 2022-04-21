import React, {FC} from 'react';
import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
} from '@mui/material';
import {classNames} from '@utils/classNames/classNames';
import './index.scss';

export type TButtonColorTypes = 'blue' | 'grey' | 'red';
export type TButtonSizeTypes = 'default' | 'medium' | 'small';

export type IButtonProps = Omit<MuiButtonProps, 'color' | 'size'> & {
  color?: TButtonColorTypes;
  size?: TButtonSizeTypes;
  iconButton?: boolean;
};

export const Button: FC<IButtonProps> = ({
  onClick,
  className = '',
  children,
  variant = 'contained',
  color = 'blue',
  size = 'default',
  iconButton,
  ...other
}) => {
  const cls = classNames('button', {
    [`${className}`]: !!className,
    [`button_size_${size}`]: !!size,
    [`button_color_${color}`]: !!color,
    button_icon: !!iconButton,
  });

  return (
    <MuiButton onClick={onClick} className={cls} variant={variant} {...other}>
      {children}
    </MuiButton>
  );
};

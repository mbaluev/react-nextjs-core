import React, {FC} from 'react';
import {classNames} from '@utils/classNames/classNames';
import './index.scss';

export interface IFormFieldProps {
  title?: string | JSX.Element;
  align?: string;
  isRow?: boolean;
  className?: string;
  error?: boolean;
  success?: boolean;
  disabled?: boolean;
}
export const FormField: FC<IFormFieldProps> = (props) => {
  const {title, align, children, isRow, error, success, className, disabled} =
    props;

  const clsMain = classNames(
    'form-field',
    isRow ? 'form-field_row' : undefined,
    className ? className : undefined,
    disabled ? 'form-field_disabled' : undefined
  );
  const clsLabel = classNames(
    'form-field__label',
    error ? 'form-field__label-error' : undefined,
    success ? 'form-field__label-success' : undefined
  );
  const clsContent = classNames(
    'form-field__content',
    align ? `form-field__content_${align}` : undefined
  );

  return (
    <div className={clsMain}>
      {title && <div className={clsLabel}>{title}</div>}
      {children && <div className={clsContent}>{children}</div>}
    </div>
  );
};

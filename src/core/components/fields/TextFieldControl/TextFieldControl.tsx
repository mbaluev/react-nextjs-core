import React from 'react';
import {TextFieldProps} from '@mui/material';
import {
  BaseFieldControlProps,
  fieldControlClassNames,
  TextFieldControlEdit,
  TextFieldControlView,
  SkeletonFieldControl,
} from '@components/fields';

export type TextFieldControlProps = TextFieldProps &
  BaseFieldControlProps & {
    value?: string | number;
    regex?: RegExp;
    viewFormat?: (value?: string | number) => string | JSX.Element;
  };

export const isTextFieldControlHasData = (value?: string | number) => {
  return value || value === 0;
};

export const TextFieldControl = (props: TextFieldControlProps) => {
  const {
    isEdit = true,
    loading,
    viewFormat,
    multiline,
    className,
    heightAuto,
    ...other
  } = props;

  const cls = fieldControlClassNames('text-field-control', props);

  return loading ? (
    <SkeletonFieldControl className={cls} />
  ) : isEdit ? (
    <TextFieldControlEdit className={cls} multiline={multiline} {...other} />
  ) : (
    <TextFieldControlView className={cls} viewFormat={viewFormat} {...other} />
  );
};

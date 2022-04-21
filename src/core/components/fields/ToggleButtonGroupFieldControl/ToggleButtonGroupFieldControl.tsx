import React from 'react';
import {ToggleButtonGroupProps} from '@mui/material';
import {
  ToggleButtonGroupFieldControlView,
  ToggleButtonGroupFieldControlEdit,
  SkeletonFieldControl,
  BaseFieldControlProps,
  fieldControlClassNames,
} from '@components/fields';

export interface IToggleButtonItem {
  value: string;
  label: string;
  disabled?: boolean;
}

export type ToggleButtonGroupFieldControlProps = ToggleButtonGroupProps &
  BaseFieldControlProps & {
    items?: IToggleButtonItem[];
  };

export const isToggleButtonGroupFieldControlHasData = (value?: any) => {
  return (
    typeof value !== 'undefined' &&
    Array.isArray(value) &&
    (value as []).length > 0
  );
};

export const ToggleButtonGroupFieldControl = (
  props: ToggleButtonGroupFieldControlProps
) => {
  const {isEdit = true, loading, className, heightAuto, ...other} = props;

  const cls = fieldControlClassNames(
    'toggle-button-group-field-control',
    props
  );

  if (loading) {
    return <SkeletonFieldControl className={cls} />;
  } else if (isEdit) {
    return <ToggleButtonGroupFieldControlEdit className={cls} {...other} />;
  } else {
    return <ToggleButtonGroupFieldControlView className={cls} {...other} />;
  }
};

import React from 'react';
import {SelectProps} from '@mui/material/Select/Select';
import {SelectInputProps} from '@mui/material/Select/SelectInput';
import {
  MultiSelectFieldControlView,
  MultiSelectFieldControlEdit,
  SkeletonFieldControl,
  ISelectItem,
  BaseFieldControlProps,
  fieldControlClassNames,
} from '@components/fields';

export type MultiSelectFieldControlProps = SelectProps &
  BaseFieldControlProps & {
    items?: ISelectItem[];
    onChange?: SelectInputProps['onChange'];
    value?: Array<unknown>;
  };

export const MultiSelectFieldControl = (
  props: MultiSelectFieldControlProps
) => {
  const {isEdit = true, loading, className, heightAuto, ...other} = props;

  const cls = fieldControlClassNames(
    'multi-select-field-control select-field-control',
    props
  );

  if (loading) {
    return <SkeletonFieldControl className={cls} />;
  } else if (isEdit) {
    return <MultiSelectFieldControlEdit className={cls} {...other} />;
  } else {
    return <MultiSelectFieldControlView className={cls} {...other} />;
  }
};

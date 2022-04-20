import React from 'react';
import {TModify} from '@utils/ts/tModify';
import {TextFieldProps} from '@mui/material';
import {DatePickerProps} from '@mui/lab';
import {
  BaseFieldControlProps,
  fieldControlClassNames,
  SkeletonFieldControl,
  DateFieldControlView,
  DateFieldControlEdit,
} from '@components/fields';

export type DateFieldControlProps = TModify<
  DatePickerProps,
  {
    name?: string | null;
    value?: Date | null;
    onChange?: (date?: Date | null, name?: string | null) => void;
    renderInput?: (props: TextFieldProps) => React.ReactNode;
  }
> &
  BaseFieldControlProps;

export const DateFieldControl = (props: DateFieldControlProps) => {
  const {isEdit = true, loading, className, heightAuto, ...other} = props;

  const cls = fieldControlClassNames('date-field-control', props);

  if (loading) {
    return <SkeletonFieldControl className={cls} />;
  } else if (isEdit) {
    return <DateFieldControlEdit {...props} />;
  } else {
    return <DateFieldControlView className={cls} {...other} />;
  }
};

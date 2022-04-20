import React from 'react';
import {Skeleton} from '@mui/material';
import {classNames} from '@utils/classNames/classNames';

interface IProps {
  className?: string;
}
export const SkeletonFieldControl = (props: IProps) => {
  const {className} = props;
  const cls = classNames('skeleton-field-control', 'field-control', className);
  return (
    <div className={cls}>
      <Skeleton />
    </div>
  );
};

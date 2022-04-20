import React from 'react';
import {ErrorItem} from '../errorItem';
import './index.scss';

interface IProps {
  errors: any[];
  remove: (id: string) => void;
}

export const ErrorList = (props: IProps) => {
  const {errors, remove} = props;
  return errors.length > 0 ? (
    <div className="error-list">
      {errors.map((item: any) => (
        <ErrorItem key={item.guid} onClose={() => remove(item.guid)} {...item} />
      ))}
    </div>
  ) : null;
};

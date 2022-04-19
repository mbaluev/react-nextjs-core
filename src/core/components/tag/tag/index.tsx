import React, {FC, MouseEvent} from 'react';
import {classNames} from '@utils/classNames/classNames';
import './index.scss';

export type ITagProps = {
  className?: string;
  checked?: boolean;
  onClick?: (e: MouseEvent<HTMLDivElement>) => void;
};

export const Tag: FC<ITagProps> = (props) => {
  const {className, checked, onClick, children} = props;

  const cls = classNames('tag', {
    className: !!className,
    tag_checked: Boolean(checked),
  });

  return (
    <div className={cls} onClick={onClick}>
      {children}
    </div>
  );
};

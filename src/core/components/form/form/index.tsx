import React, {FC} from 'react';
import './index.scss';

export interface IFormProps {
  className?: string;
  style?: Record<any, any>;
}

export const Form: FC<IFormProps> = (props) => {
  const {className, style, children} = props;
  const classNames = ['form'];
  if (className) classNames.push(className);
  return (
    <div className={classNames.join(' ')} style={style}>
      {children}
    </div>
  );
};

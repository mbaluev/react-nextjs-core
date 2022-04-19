import React, {FC, useState} from 'react';
import ExpandLess from '@mui/icons-material/ExpandMore';
import ExpandMore from '@mui/icons-material/ExpandLess';
import './index.scss';

export interface IFormSectionProps {
  id?: string;
  title?: string | JSX.Element;
  subtitle?: string | JSX.Element;
  titleClassName?: string;
  align?: string;
  info?: string;
  className?: string;
  rightBlock?: JSX.Element;
  collapsible?: boolean;
  isOpen?: boolean;
}

export const FormSection: FC<IFormSectionProps> = ({
  id,
  title,
  subtitle,
  titleClassName,
  align,
  info,
  className,
  rightBlock,
  collapsible,
  isOpen = true,
  children,
}) => {
  const [isCollapse, setIsCollapse] = useState<boolean | undefined>(!isOpen);

  const clsMain = ['form-section'];
  if (className) clsMain.push(className);
  if (collapsible) clsMain.push('form-section_collapsible');
  if (isCollapse) clsMain.push('form-section_collapsed');

  const clsTitle = ['form-section__title'];
  if (titleClassName) clsTitle.push(titleClassName);

  const clsContent = ['form-section__content'];
  if (align) clsContent.push(`form-section__content_${align}`);
  if (collapsible && isCollapse)
    clsContent.push(`form-section__content_collapsed`);

  const collapseClick = () => {
    if (collapsible) setIsCollapse(!isCollapse);
  };

  return (
    <div className={clsMain.join(' ')} id={id}>
      {title || info || rightBlock ? (
        <div className={clsTitle.join(' ')}>
          <div className="form-section__title-left" onClick={collapseClick}>
            <div className="form-section__title-left-text">
              {title ? (
                <label className="form-section__label">{title}</label>
              ) : null}
            </div>
            {collapsible ? (
              <div className="form-section__title-left-collapse">
                {isCollapse ? <ExpandMore /> : <ExpandLess />}
              </div>
            ) : null}
          </div>
          {rightBlock ? (
            <div className="form-section__title-right">{rightBlock}</div>
          ) : null}
        </div>
      ) : null}
      {subtitle && <div className="form-section__subtitle">{subtitle}</div>}
      <div className={clsContent.join(' ')}>{children}</div>
    </div>
  );
};

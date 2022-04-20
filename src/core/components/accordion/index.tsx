import React, {FC, useState} from 'react';
import {Accordion as AccordionMui, AccordionDetails, AccordionSummary} from '@mui/material';
import {ExpandMore} from '@mui/icons-material';
import {Button, IButtonProps} from '@components/button';
import './index.scss';

interface IProps {
  title: string;
  className?: string;
  footer?: boolean;
  footerButtons?: IButtonProps[];
  isExpanded?: boolean;
  onExpand?: () => void;
}

export const Accordion: FC<IProps> = (props) => {
  const {title, className, children, footer, footerButtons, isExpanded, onExpand} = props;

  const [expanded, setExpanded] = useState<boolean>(Boolean(isExpanded));

  const cls = ['accordion'];
  if (className) cls.push(className);
  if (expanded) cls.push('accordion_expanded');

  const onChange = () => {
    if (onExpand) onExpand();
    setExpanded(!expanded);
  };

  const AccordionFooter = () => {
    if (footerButtons && expanded) {
      return (
        <div className="accordion__footer">
          <div className="accordion__footer-buttons">
            {footerButtons?.map((btn, index) => (
              <Button key={index} {...btn} size="small" />
            ))}
          </div>
        </div>
      );
    } else if (footer && expanded) {
      return <div className="accordion__footer" />;
    } else {
      return null;
    }
  };

  return (
    <div className={cls.join(' ')}>
      <AccordionMui expanded={expanded} onChange={onChange}>
        <AccordionSummary expandIcon={<ExpandMore />}>{title}</AccordionSummary>
        <AccordionDetails>{children}</AccordionDetails>
        <AccordionFooter />
      </AccordionMui>
    </div>
  );
};

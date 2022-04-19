import React from 'react';
import useScrollSpy from '@hooks/useScrollSpy';
import {classNames} from '@utils/classNames/classNames';
import {ContentMenu, ContentPanels} from '@components/content';
import './index.scss';

export interface IContentItemProps {
  id: string;
  label: string;
  content: JSX.Element | string;
  className?: string;
}

export interface IContentProps {
  items: IContentItemProps[];
  elementId: string;
  className?: string;
  offsetTop?: number;
  activeItem?: string;
}

export const Content = (props: IContentProps) => {
  const {items, elementId, offsetTop, className} = props;
  const {active} = useScrollSpy(elementId, items, offsetTop);

  // const router = useRouter();
  // useEffect(() => {
  //   const onHashChangeStart = () => {
  //     setActive(window.location.hash.replace('#', ''));
  //   };
  //   router.events.on('hashChangeStart', onHashChangeStart);
  //   return () => {
  //     router.events.off('hashChangeStart', onHashChangeStart);
  //   };
  // }, [router.events]);

  const cls = classNames('content', className);
  return (
    <div className={cls}>
      <ContentPanels {...props} activeItem={active} />
      <ContentMenu {...props} activeItem={active} />
    </div>
  );
};

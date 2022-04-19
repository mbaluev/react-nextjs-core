import React, {FC} from 'react';
import {useRouter} from 'next/router';
import {Layout} from '@components/layout';
import {MENU_CONFIG} from '@model/menu/mock';
import './index.scss';

export const Master: FC = (props) => {
  const {children} = props;
  const router = useRouter();
  return (
    <Layout
      className="shop-master"
      contentId="shop-master"
      headerProps={{
        items: MENU_CONFIG.map((item) => {
          item.isActive = item.path === router.pathname;
          return item;
        }),
      }}
    >
      {children}
    </Layout>
  );
};

import React, {FC} from 'react';
import {useRouter} from 'next/router';
import {PageLayout} from '@components/pageLayout';
import {Layout} from '@components/layout';
import {HEADER_ITEMS} from '@/ui/system/settings/headerItems';
import './index.scss';

export const Master: FC = (props) => {
  const {children} = props;
  const router = useRouter();
  return (
    <Layout
      className="lib-master"
      contentId="lib-master"
      headerProps={{
        items: HEADER_ITEMS.map((item) => {
          item.isActive = item.path === router.pathname;
          return item;
        }),
      }}
    >
      <PageLayout title="Components">
        <div className="lib-master__content">{children}</div>
      </PageLayout>
    </Layout>
  );
};

import React from 'react';
import {ErrorPage} from '../index';
import {Layout} from '../../../layout';

export const Page404 = () => {
  return <ErrorPage>404</ErrorPage>;
};

export const Layout404 = () => {
  return (
    <Layout>
      <Page404 />
    </Layout>
  );
};

import React from 'react';
import {ErrorPage} from '../index';
import {Layout} from '../../../layout';

export const Page500 = () => {
  return <ErrorPage>500</ErrorPage>;
};

export const Layout500 = () => {
  return (
    <Layout>
      <Page500 />
    </Layout>
  );
};

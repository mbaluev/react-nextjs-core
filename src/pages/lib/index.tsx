import React from 'react';
import {Master} from '@/ui/system/master';
import {Content} from '@components/content';
import {LIB_CONTENT_CONFIG} from '@/ui/system/pages/lib/settings/contentConfig';

const All = () => {
  return <Content elementId="lib-master" items={LIB_CONTENT_CONFIG} />;
};

All.Layout = Master;
export default All;

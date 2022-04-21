import * as React from 'react';
import Head from 'next/head';
import {AppProps} from 'next/app';
import {CacheProvider, EmotionCache} from '@emotion/react';
import createEmotionCache from '@utils/cache/createEmotionCache';
import {LayoutEmpty} from '@components/layout';
import moment from 'moment';
import numeral from 'numeral';
import '../core/scss/index.scss';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

moment.locale('en');
numeral.locale('en');

export default function MyApp(props: MyAppProps) {
  const {Component, emotionCache = clientSideEmotionCache, pageProps} = props;
  const Layout = (Component as any).Layout || LayoutEmpty;
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>T1-v2-Shop</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </CacheProvider>
  );
}

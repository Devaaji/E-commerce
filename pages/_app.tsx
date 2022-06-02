import '../styles/globals.css';
import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import NextNProgress from 'nextjs-progressbar';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import theme from '../theme';
import { fetcher } from '../libs/axios';
import { NextPageWithLayout } from '../ts/types/NextPageWithLayout';
import { SWRConfig } from 'swr';


type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page) => page);

  const fallback = pageProps.fallback || {};

  return (
    <ChakraProvider theme={theme}>
      <SWRConfig value={{ fetcher, fallback }}>
        <NextNProgress
          color="#206562"
          height={5}
          options={{ showSpinner: false }}
        />
        {getLayout(<Component {...pageProps} />)}
      </SWRConfig>
    </ChakraProvider>
  );
}

export default MyApp;

import '../styles/globals.css';
import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import NextNProgress from 'nextjs-progressbar';
import theme from '../theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <NextNProgress
        color="#206562"
        height={5}
        options={{ showSpinner: false }}
      />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;

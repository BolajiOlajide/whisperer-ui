import NextApp from 'next/app';
import Head from 'next/head';
import { ThemeProvider, CSSReset, ColorModeProvider } from '@chakra-ui/core';
import { ApolloProvider, useApolloClient } from '@apollo/react-hooks';

import theme from '../theme';
import withApollo from '../utils/apollo';


const App = withApollo(({ Component, pageProps, apollo }) => (
  <ApolloProvider client={apollo}>
    <ThemeProvider theme={theme}>
      <CSSReset />
      <ColorModeProvider>
        <Component {...pageProps} />
      </ColorModeProvider>
    </ThemeProvider>
  </ApolloProvider>
));

App.getInitialProps = async ({ Component, ctx }) => {
  let pageProps = {};
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }
  pageProps.query = {
    ...ctx.query,
    ...pageProps.query
  };
  return { pageProps };
};

export default App;

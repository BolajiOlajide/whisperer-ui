import { Fragment } from 'react';
import Head from 'next/head';
import { ThemeProvider, CSSReset, ColorModeProvider } from '@chakra-ui/core';
import { ApolloProvider } from '@apollo/react-hooks';

import theme from '../theme';
import withApollo from '../utils/apollo';
import '../assets/main.css';

const App = ({ Component, pageProps, apollo }) => (
  <Fragment>
    <Head>
      <link rel="icon" type="image/x-icon" href="/static/favicon.ico" />
      <link href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;500;600;700&display=swap" rel="stylesheet" />
      <title>Whisperer</title>
    </Head>
    {/* <ApolloProvider client={apollo}> */}
      <ThemeProvider theme={theme}>
        <CSSReset />
        <ColorModeProvider>
          <Component {...pageProps} />
        </ColorModeProvider>
      </ThemeProvider>
    {/* </ApolloProvider> */}
  </Fragment>
);

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

// export default withApollo(App);
export default App;

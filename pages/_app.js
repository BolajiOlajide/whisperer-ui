import NextApp from 'next/app';
import { ThemeProvider, CSSReset, ColorModeProvider } from '@chakra-ui/core';
import { ApolloProvider, useApolloClient } from '@apollo/react-hooks';

import theme from '../theme';
import withApollo from '../utils/apollo';


class App extends NextApp {
  static getInitialProps = async ({ Component, ctx }) => {
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

  render() {
    const { Component, pageProps, apollo } = this.props;

    return (
      <ApolloProvider client={apollo}>
        <ThemeProvider theme={theme}>
          <CSSReset />
          <ColorModeProvider>
            <Component {...pageProps} />
          </ColorModeProvider>
        </ThemeProvider>
      </ApolloProvider>
    )
  }
}

export default withApollo(App);

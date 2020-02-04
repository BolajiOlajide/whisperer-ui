import App, { Container } from 'next/app';
import { ThemeProvider, CSSReset } from '@chakra-ui/core';

import theme from '../theme';


class WhispererApp extends App {
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
    const { Component, pageProps } = this.props;

    return (
      <ThemeProvider theme={theme}>
        <CSSReset />
        <Container>
          <Component {...pageProps} />
        </Container>
      </ThemeProvider>
    )
  }
}

export default WhispererApp;

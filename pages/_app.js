import App, { Container } from 'next/app';
import { ThemeProvider, CSSReset } from '@chakra-ui/core';

import theme from '../theme';


class WhispererApp extends App {
  static getInitialProps = async ({ Component, ctx }) => {
    let individualPageProps = {};
    if (Component.getInitialProps) {
      individualPageProps = await Component.getInitialProps(ctx);
    }
    // exposes the query to the user
    individualPageProps.query = ctx.query;
    return { individualPageProps };
  };

  render() {
    const { Component, individualPageProps } = this.props;

    return (
      <ThemeProvider theme={theme}>
        <CSSReset />
        <Container>
          <Component {...individualPageProps} />
        </Container>
      </ThemeProvider>
    )
  }
}

export default WhispererApp;

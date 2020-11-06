import withApollo from 'next-with-apollo';
import { ApolloClient, InMemoryCache } from '@apollo/react-hooks';

import { endpoint, WHISPER_TOKEN } from '../constants';


const getToken = () => {
  if (process.browser) {
    console.log('ririe')
    const token = window.localStorage.getItem(WHISPER_TOKEN);
    return token || '';
  }
  return '';
};

export default withApollo(({ initialState, headers, ctx }) => {
  console.log(ctx, '<==')
  return new ApolloClient({
    uri: endpoint,
    cache: new InMemoryCache().restore(initialState || {}),
    headers: {
      ...headers,
      Authorization: getToken()
    },
  })
});

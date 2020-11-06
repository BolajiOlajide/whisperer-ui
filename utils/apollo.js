import withApollo from 'next-with-apollo';
import { ApolloClient, InMemoryCache } from '@apollo/react-hooks';

import { endpoint } from '../constants';


export default withApollo(({ initialState, headers, ctx }) => {
  return new ApolloClient({
    uri: endpoint,
    cache: new InMemoryCache().restore(initialState || {}),
    credentials: 'include',
    request: operation => {
      operation.setContext({
        fetchOptions: {
          credentials: 'include',
        },
        headers,
      });
    },
  })
});

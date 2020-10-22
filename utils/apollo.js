import withApollo from 'next-with-apollo';
import ApolloClient, { InMemoryCache } from 'apollo-boost';

import { endpoint } from '../constants';


export default withApollo(({ initialState, headers }) => {
  const client = new ApolloClient({
    uri: endpoint,
    cache: new InMemoryCache().restore(initialState || {}),
    request: operation => {
      operation.setContext({
        fetchOptions: { credentials: 'include' },
        headers,
      });
    },
  });

  return client;
});

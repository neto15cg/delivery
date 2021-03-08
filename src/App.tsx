import React from 'react';

import Routing from '@routes/Routing';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://api.code-challenge.ze.delivery/public/graphql',
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Routing />
    </ApolloProvider>
  );
};

export default App;

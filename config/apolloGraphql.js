import {ApolloClient, InMemoryCache} from '@apollo/client';
import {API_URL} from '@env';

// Initialize Apollo Client
const client = new ApolloClient({
  uri: API_URL,
  cache: new InMemoryCache(),
});

export default client;

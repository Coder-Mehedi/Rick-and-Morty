import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import React from 'react';
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';
import {API_URL} from '@env';

// Initialize Apollo Client
const client = new ApolloClient({
  uri: API_URL,
  cache: new InMemoryCache(),
});

const RootApp = () => (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);

AppRegistry.registerComponent(appName, () => RootApp);

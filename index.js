import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import React from 'react';
import {ApolloProvider} from '@apollo/client';
import apolloClient from './config/apolloGraphql';

const RootApp = () => (
  <ApolloProvider client={apolloClient}>
    <App />
  </ApolloProvider>
);

AppRegistry.registerComponent(appName, () => RootApp);

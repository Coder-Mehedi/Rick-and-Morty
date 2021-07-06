import {ApolloClient, InMemoryCache} from '@apollo/client';
import {API_URL} from '@env';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistCache, AsyncStorageWrapper} from 'apollo3-cache-persist';
import {concatPagination} from '@apollo/client/utilities';

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        // characters: concatPagination(),
        // characters: {
        // Don't cache separate results based on
        // any of this field's arguments.
        // keyArgs: false,
        // Concatenate the incoming list items with
        // the existing list items.
        // merge(existing = [], incoming) {
        //   console.log('existing', existing);
        //   let marged = incoming;
        //   // return incoming;
        //   marged.results = [...existing.results, ...incoming.results];
        //   console.log('marged', marged);
        //   return marged;
        // return [...existing, ...incoming];
        // },
      },
    },
  },
});

persistCache({
  cache,
  storage: new AsyncStorageWrapper(AsyncStorage),
});

const client = new ApolloClient({
  cache,
  uri: API_URL,
});

export default client;

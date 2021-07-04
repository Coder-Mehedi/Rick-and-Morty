import {ApolloClient, InMemoryCache} from '@apollo/client';
import {API_URL} from '@env';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistCache, AsyncStorageWrapper} from 'apollo3-cache-persist';

const cache = new InMemoryCache();

persistCache({
  cache,
  storage: new AsyncStorageWrapper(AsyncStorage),
});

const client = new ApolloClient({
  cache,
  uri: API_URL,
});

export default client;

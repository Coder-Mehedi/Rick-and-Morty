import {useQuery} from '@apollo/client';
import React, {createContext, useContext, useState} from 'react';
import GET_EPISODES from '../../graphql/query/getEpisodes.gql';

const EpisodesContext = createContext({
  data: [],
  loading: false,
  fetchMoreData: () => {},
  searchText: '',
  setSearchText: (searchText: string) => {},
});

function EpisodesProvider({children}: any) {
  const [searchText, setSearchText] = useState('');

  const {data, loading, fetchMore} = useQuery(GET_EPISODES, {
    variables: {page: 1, filter: {name: searchText}},
  });

  const fetchMoreData = () => {
    fetchMore({
      variables: {page: data.episodes.info.next},
      updateQuery: (prev: any, {fetchMoreResult}: any) => {
        fetchMoreResult.episodes.results = new Set([
          ...prev.episodes.results,
          ...fetchMoreResult.episodes.results,
        ]);
        return fetchMoreResult;
      },
    });
  };

  return (
    <EpisodesContext.Provider
      value={{
        data: data?.episodes.results,
        loading,
        fetchMoreData,
        searchText,
        setSearchText,
      }}>
      {children}
    </EpisodesContext.Provider>
  );
}

const useEpisodes = () => useContext(EpisodesContext);

export {EpisodesProvider, useEpisodes};

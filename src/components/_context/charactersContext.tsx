import {useQuery} from '@apollo/client';
import GET_CHARACTERS from 'graphql/query/getCharacters.gql';
import React, {createContext, useContext, useState} from 'react';

interface Filter {
  status: string;
  species: string;
  type: string;
  gender: string;
}

const CharactersContext = createContext({
  data: null,
  loading: false,
  fetchMoreData: () => {},
  searchText: '',
  setSearchText: (searchText: string) => {},
  filter: {
    status: '',
    species: '',
    type: '',
    gender: '',
  },
  setFilter: (filter: Filter) => {},
  resetFilter: () => {},
});

function CharactersProvider({children}: any) {
  const [searchText, setSearchText] = useState('');
  const [filter, setFilter] = useState({
    status: '',
    species: '',
    type: '',
    gender: '',
  });
  const {data, loading, fetchMore} = useQuery(GET_CHARACTERS, {
    variables: {page: 1, filter: {name: searchText, ...filter}},
    onError: err => console.log(err),
  });

  const fetchMoreData = () => {
    fetchMore({
      variables: {page: data.characters.info.next},
      updateQuery: (prev: any, {fetchMoreResult}: any) => {
        fetchMoreResult.characters.results = new Set([
          ...prev.characters.results,
          ...fetchMoreResult.characters.results,
        ]);
        return fetchMoreResult;
      },
    });
  };
  const resetFilter = () => {
    setFilter({
      status: '',
      species: '',
      type: '',
      gender: '',
    });
  };

  return (
    <CharactersContext.Provider
      value={{
        data: data?.characters.results,
        loading,
        fetchMoreData,
        searchText,
        setSearchText,
        filter,
        setFilter,
        resetFilter,
      }}>
      {children}
    </CharactersContext.Provider>
  );
}

const useCharacters = () => useContext(CharactersContext);

export {CharactersProvider, useCharacters};

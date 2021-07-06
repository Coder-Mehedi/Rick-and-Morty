import {useQuery} from '@apollo/client';
import {GET_CHARACTERS} from 'graphql/query/getCharacters';
import React, {createContext, useContext, useState} from 'react';

const CharactersContext = createContext({
  data: null,
  loading: false,
  fetchMoreData: () => {},
  searchText: '',
  setSearchText: (searchText: string) => {},
});

function CharactersProvider({children}: any) {
  const [searchText, setSearchText] = useState('');
  const {data, loading, fetchMore} = useQuery(GET_CHARACTERS, {
    variables: {page: 1, filter: {name: searchText}},
  });

  const fetchMoreData = () => {
    fetchMore({
      variables: {page: data.characters.info.next},
      updateQuery: (prev: any, {fetchMoreResult}: any) => {
        fetchMoreResult.characters.results = [
          ...prev.characters.results,
          ...fetchMoreResult.characters.results,
        ];
        return fetchMoreResult;
      },
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
      }}>
      {children}
    </CharactersContext.Provider>
  );
}

const useCharacters = () => useContext(CharactersContext);

export {CharactersProvider, useCharacters};

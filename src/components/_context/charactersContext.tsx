import {useQuery} from '@apollo/client';
import {GET_CHARACTERS} from 'graphql/query/getCharacters';
import React, {createContext, useContext, useState} from 'react';

const CharactersContext = createContext({
  data: null,
  loading: false,
  fetchMoreData: () => {},
});

function CharactersProvider({children}: any) {
  const [info, setInfo] = useState<any>(null);
  const [data, setData] = useState<any>(null);
  const [page, setPage] = useState(1);

  const {loading} = useQuery(GET_CHARACTERS, {
    variables: {page},
    onCompleted: resData => {
      setInfo(resData.characters.info);
      if (data?.length)
        return setData([...data, ...resData.characters.results]);
      setData(resData.characters.results);
    },
  });

  const fetchMoreData = () => {
    if (info.next) setPage(info.next);
  };

  return (
    <CharactersContext.Provider
      value={{
        data,
        loading,
        fetchMoreData,
      }}>
      {children}
    </CharactersContext.Provider>
  );
}

const useCharacters = () => useContext(CharactersContext);

export {CharactersProvider, useCharacters};

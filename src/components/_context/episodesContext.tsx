import {useQuery} from '@apollo/client';
import React, {createContext, useContext, useState} from 'react';
import {GET_CHARACTERS} from '../../graphql/query/getCharacters';
import {GET_EPISODES} from '../../graphql/query/getEpisodes';

const EpisodesContext = createContext({
  data: [],
  loading: false,
  fetchMoreData: () => {},
});

function EpisodesProvider({children}: any) {
  const [info, setInfo] = useState<any>(null);
  const [data, setData] = useState<any>(null);
  const [nextPage, setNextPage] = useState(1);

  const {loading} = useQuery(GET_EPISODES, {
    variables: {page: nextPage},
    onCompleted: resData => {
      setInfo(resData.episodes.info);
      if (data?.length) return setData([...data, ...resData.episodes.results]);
      setData(resData.episodes.results);
    },
  });

  const fetchMoreData = () => {
    if (info.next) setNextPage(info.next);
  };

  return (
    <EpisodesContext.Provider
      value={{
        data,
        loading,
        fetchMoreData,
      }}>
      {children}
    </EpisodesContext.Provider>
  );
}

const useEpisodes = () => useContext(EpisodesContext);

export {EpisodesProvider, useEpisodes};

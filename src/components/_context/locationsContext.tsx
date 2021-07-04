import {useQuery} from '@apollo/client';
import {GET_LOCATIONS} from 'graphql/query/getLocations';
import React, {createContext, useContext, useState} from 'react';

const LocationsContext = createContext({
  data: [],
  loading: false,
  fetchMoreData: () => {},
});

function LocationsProvider({children}: any) {
  const [info, setInfo] = useState<any>(null);
  const [data, setData] = useState<any>(null);
  const [nextPage, setNextPage] = useState(1);

  const {loading} = useQuery(GET_LOCATIONS, {
    variables: {page: nextPage},
    onCompleted: resData => {
      setInfo(resData.locations.info);
      if (data?.length) return setData([...data, ...resData.locations.results]);
      setData(resData.locations.results);
    },
  });

  const fetchMoreData = () => {
    if (info.next) setNextPage(info.next);
  };

  return (
    <LocationsContext.Provider
      value={{
        data,
        loading,
        fetchMoreData,
      }}>
      {children}
    </LocationsContext.Provider>
  );
}

const useLocations = () => useContext(LocationsContext);

export {LocationsProvider, useLocations};

import {useQuery} from '@apollo/client';
import GET_LOCATIONS from 'graphql/query/getLocations.gql';
import React, {createContext, useContext, useState} from 'react';

const LocationsContext = createContext({
  data: [],
  loading: false,
  fetchMoreData: () => {},
  searchText: '',
  setSearchText: (searchText: string) => {},
});

function LocationsProvider({children}: any) {
  const [searchText, setSearchText] = useState('');

  const {data, loading, fetchMore} = useQuery(GET_LOCATIONS, {
    variables: {page: 1, filter: {name: searchText}},
  });

  const fetchMoreData = () => {
    fetchMore({
      variables: {page: data.locations.info.next},
      updateQuery: (prev: any, {fetchMoreResult}: any) => {
        fetchMoreResult.locations.results = [
          ...prev.locations.results,
          ...fetchMoreResult.locations.results,
        ];
        return fetchMoreResult;
      },
    });
  };

  return (
    <LocationsContext.Provider
      value={{
        data: data?.locations.results,
        loading,
        fetchMoreData,
        searchText,
        setSearchText,
      }}>
      {children}
    </LocationsContext.Provider>
  );
}

const useLocations = () => useContext(LocationsContext);

export {LocationsProvider, useLocations};

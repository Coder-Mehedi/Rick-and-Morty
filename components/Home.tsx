import {useQuery} from '@apollo/client';
import React, {Fragment, useState} from 'react';
import {
  StyleSheet,
  Text,
  Image,
  FlatList,
  Button,
  Pressable,
} from 'react-native';
import {GET_CHARACTERS} from '../graphql/query/getCharacters';

const Home = ({navigation}: {navigation: any}) => {
  const [data, setData] = useState<any>(null);
  const [nextPage, setNextPage] = useState(2);
  const {loading, fetchMore} = useQuery(GET_CHARACTERS, {
    variables: {page: 1},
    onCompleted: data => {
      setData(data.characters.results);
    },
  });

  return (
    <Fragment>
      <FlatList
        onEndReached={async () => {
          const res = await fetchMore({
            variables: {page: nextPage},
          });
          setData([...data, ...res.data.characters.results]);
          setNextPage(res.data.characters.info.next);
        }}
        refreshing={loading}
        progressViewOffset={5}
        style={styles.container}
        data={data}
        renderItem={({item: character}) => (
          <Pressable
            key={character.name}
            onPress={() => {
              navigation.navigate('HomeScreen', {character});
            }}>
            <Image source={{uri: character.image}} style={styles.image} />
            <Text style={styles.name}>{character.name}</Text>
          </Pressable>
        )}
      />
      <Button
        title="fetch more"
        onPress={async () => {
          const res = await fetchMore({
            variables: {page: 5},
          });
          setData([...data, ...res.data.characters.results]);
        }}
      />
    </Fragment>
  );
};

const styles = StyleSheet.create({
  full: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    backgroundColor: '#fff',
  },
  name: {
    fontSize: 20,
    padding: 10,
  },
  image: {
    width: '100%',
    height: 200,
  },
});

export default Home;

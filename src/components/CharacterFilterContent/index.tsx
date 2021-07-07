import {useCharacters} from 'components/_context/charactersContext';
import React from 'react';
import {View, Button} from 'react-native';
import {List} from 'react-native-paper';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {Colors} from 'utils/colors';
import styles from './styles';

const CharacterFilterContent = () => {
  const {filter, setFilter, resetFilter} = useCharacters();

  const filterStatus = (status: string) => {
    if (filter.status === status) return setFilter({...filter, status: ''});
    setFilter({...filter, status});
  };

  const filterGender = (gender: string) => {
    if (filter.gender === gender) return setFilter({...filter, gender: ''});
    setFilter({...filter, gender});
  };

  const checkIcon = (
    <FontAwesome5 name="check" size={25} color={Colors.focused} />
  );

  return (
    <View style={{backgroundColor: Colors.primaryBackground, flex: 1}}>
      <List.Section
        title="Filters"
        style={styles.listSection}
        titleStyle={styles.listSectionTitle}>
        <List.Accordion
          style={styles.listAccordion}
          titleStyle={styles.listAccordionTitle}
          title="Status"
          left={() => (
            <FontAwesome5 name="heartbeat" size={25} color={Colors.focused} />
          )}>
          <View style={{left: -30}}>
            <List.Item
              title="Alive"
              titleStyle={styles.listItem}
              onPress={() => filterStatus('Alive')}
              left={() => (
                <FontAwesome5 name="heart" size={25} color={Colors.focused} />
              )}
              right={() => (filter.status === 'Alive' ? checkIcon : null)}
            />
            <List.Item
              title="Dead"
              titleStyle={styles.listItem}
              onPress={() => filterStatus('Dead')}
              left={() => (
                <FontAwesome5
                  name="heart-broken"
                  size={25}
                  color={Colors.focused}
                />
              )}
              right={() => (filter.status === 'Dead' ? checkIcon : null)}
            />
          </View>
        </List.Accordion>
        <List.Accordion
          style={styles.listAccordion}
          titleStyle={styles.listAccordionTitle}
          title="Gender"
          left={() => (
            <FontAwesome5 name="user" size={25} color={Colors.focused} />
          )}>
          <View style={{left: -30}}>
            <List.Item
              title="Male"
              titleStyle={styles.listItem}
              onPress={() => filterGender('Male')}
              left={() => (
                <FontAwesome5 name="male" size={25} color={Colors.focused} />
              )}
              right={() => (filter.gender === 'Male' ? checkIcon : null)}
            />
            <List.Item
              title="Female"
              titleStyle={styles.listItem}
              onPress={() => filterGender('Female')}
              left={() => (
                <FontAwesome5 name="female" size={25} color={Colors.focused} />
              )}
              right={() => (filter.gender === 'Female' ? checkIcon : null)}
            />
          </View>
        </List.Accordion>
      </List.Section>
      <Button title="Reset Filter" onPress={resetFilter} />
    </View>
  );
};

export default CharacterFilterContent;

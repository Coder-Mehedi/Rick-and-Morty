import {useNavigation} from '@react-navigation/native';
import React, {useRef} from 'react';
import {View, Button, StyleSheet} from 'react-native';
import {List} from 'react-native-paper';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {Colors} from 'utils/colors';
import {useCharacters} from './_context/charactersContext';

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
          left={props => (
            <FontAwesome5 name="heartbeat" size={25} color={Colors.focused} />
          )}>
          <View style={{left: -30}}>
            <List.Item
              title="Alive"
              titleStyle={styles.listItem}
              onPress={() => filterStatus('Alive')}
              left={props => (
                <FontAwesome5 name="heart" size={25} color={Colors.focused} />
              )}
              right={props => (filter.status === 'Alive' ? checkIcon : null)}
            />
            <List.Item
              title="Dead"
              titleStyle={styles.listItem}
              onPress={() => filterStatus('Dead')}
              left={props => (
                <FontAwesome5
                  name="heart-broken"
                  size={25}
                  color={Colors.focused}
                />
              )}
              right={props => (filter.status === 'Dead' ? checkIcon : null)}
            />
          </View>
        </List.Accordion>
        <List.Accordion
          style={styles.listAccordion}
          titleStyle={styles.listAccordionTitle}
          title="Gender"
          left={props => (
            <FontAwesome5 name="user" size={25} color={Colors.focused} />
          )}>
          <View style={{left: -30}}>
            <List.Item
              title="Male"
              titleStyle={styles.listItem}
              onPress={() => filterGender('Male')}
              left={props => (
                <FontAwesome5 name="male" size={25} color={Colors.focused} />
              )}
              right={props => (filter.gender === 'Male' ? checkIcon : null)}
            />
            <List.Item
              title="Female"
              titleStyle={styles.listItem}
              onPress={() => filterGender('Female')}
              left={props => (
                <FontAwesome5 name="female" size={25} color={Colors.focused} />
              )}
              right={props => (filter.gender === 'Female' ? checkIcon : null)}
            />
          </View>
        </List.Accordion>
      </List.Section>
      <Button title="Reset Filter" onPress={resetFilter} />
    </View>
  );
};

const styles = StyleSheet.create({
  listSection: {backgroundColor: Colors.primaryBackground, flex: 1},
  listSectionTitle: {color: Colors.label},
  listAccordion: {backgroundColor: Colors.secondaryBackground},
  listAccordionTitle: {color: Colors.primary},
  listItem: {color: Colors.label},
});

export default CharacterFilterContent;

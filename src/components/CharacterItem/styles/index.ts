import {StyleSheet} from 'react-native';
import {Colors} from 'utils/colors';

export default StyleSheet.create({
  container: {backgroundColor: Colors.primaryBackground},
  smallImage: {width: 50, height: 50, borderRadius: 50},
  image: {width: 80, height: 80, borderRadius: 50},
  nameAndCount: {padding: 10},
  name: {fontSize: 22, color: Colors.primary},
  episodeCount: {fontSize: 18, color: Colors.inActive},
  loading: {
    textAlign: 'center',
    backgroundColor: Colors.primaryBackground,
    color: Colors.label,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderTopWidth: 1,
    borderColor: Colors.separator,
  },
});

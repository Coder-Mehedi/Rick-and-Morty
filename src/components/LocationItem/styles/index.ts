import {StyleSheet} from 'react-native';
import {Colors} from 'utils/colors';

export default StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    backgroundColor: Colors.secondaryBackground,
    padding: 10,
    paddingTop: 20,
    paddingBottom: 20,
    borderBottomColor: Colors.separator,
    borderBottomWidth: 1,
  },
  locationName: {
    color: Colors.label,
    fontSize: 20,
    marginLeft: 10,
    maxWidth: '50%',
  },
  residentCount: {
    color: Colors.inActive,
    fontSize: 18,
    marginLeft: 'auto',
  },
});

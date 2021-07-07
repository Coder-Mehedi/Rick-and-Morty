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
  iconContainer: {
    width: 35,
    alignItems: 'center',
  },
  label: {
    color: Colors.label,
    fontSize: 20,
    marginLeft: 10,
  },
  value: {
    marginLeft: 'auto',
    color: Colors.focused,
    fontSize: 20,
    maxWidth: '60%',
  },
});

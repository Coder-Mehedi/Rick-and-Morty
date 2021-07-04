import React from 'react';

import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {Image} from 'react-native';
import styles from './styles';

function CustomDrawerContent(props: any) {
  return (
    <DrawerContentScrollView {...props}>
      <Image
        style={styles.image}
        source={{
          uri: 'https://cdn.dribbble.com/users/2313212/screenshots/12089395/media/ded884ae1c4b7d49e3696f1def8fcd81.jpg?compress=1&resize=1200x900',
        }}
      />
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}

export default CustomDrawerContent;

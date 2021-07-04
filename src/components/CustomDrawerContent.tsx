import React from 'react';

import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {Text, Image} from 'react-native';

function CustomDrawerContent(props: any) {
  return (
    <DrawerContentScrollView {...props}>
      <Image
        style={{width: '100%', height: 200, marginBottom: 20}}
        source={{
          uri: 'https://cdn.dribbble.com/users/2313212/screenshots/12089395/media/ded884ae1c4b7d49e3696f1def8fcd81.jpg?compress=1&resize=1200x900',
        }}
      />
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}

export default CustomDrawerContent;

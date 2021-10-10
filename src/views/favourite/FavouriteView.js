import React from 'react';
import { View, Text } from 'react-native';
import FocusAwareStatusBar from '../../utils/FocusAwareStatusBar';

const FavouriteView = () => {
  return (
    <View>
      <FocusAwareStatusBar barStyle="dark-content" backgroundColor="white" />
      <Text>FavouriteView</Text>
    </View>
  );
};

export default FavouriteView;

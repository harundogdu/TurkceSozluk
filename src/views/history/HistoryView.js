import React from 'react';
import { View, Text } from 'react-native';
import FocusAwareStatusBar from '../../utils/FocusAwareStatusBar';

const HistoryView = () => {
  return (
    <View>
      <FocusAwareStatusBar barStyle="dark-content" backgroundColor="white" />
      <Text>HistoryView</Text>
    </View>
  );
};

export default HistoryView;

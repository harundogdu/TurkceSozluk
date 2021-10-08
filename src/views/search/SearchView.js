import React from 'react';
import {View, Text, Button} from 'react-native';
/* Search Function */
const SearchView = ({navigation}) => {
  return (
    <View>
      <Text>SearchView</Text>
      <Button title="Go Detail" onPress={() => navigation.navigate('Detail')} />
    </View>
  );
};

export default SearchView;

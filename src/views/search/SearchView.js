import React from 'react';
import {Text, Button} from 'react-native';
import Box from '../../components/Box/BoxDefault';
import BoxCenter from '../../components/Box/BoxCenter';
/* Search Function */
const SearchView = ({navigation}) => {
  return (
    <BoxCenter>
      <Text>SearchView</Text>
      <Button title="Go Detail" onPress={() => navigation.navigate('Detail')} />
      <Box size={20} bg="blue" mt={20} />
    </BoxCenter>
  );
};

export default SearchView;

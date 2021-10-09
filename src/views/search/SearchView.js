import React from 'react';
import { Button } from 'react-native';
import BoxCenter from '../../components/Box/BoxCenter';
/* Search Function */
const SearchView = ({ navigation }) => {
  return (
    <BoxCenter>
      <Button title="Go Detail" onPress={() => navigation.navigate('Detail')} />
    </BoxCenter>
  );
};

export default SearchView;

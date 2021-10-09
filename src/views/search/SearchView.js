import React from 'react';
import { Button } from 'react-native';
import { Logo } from '../../components/icons';
import SearchBox from '../../components/SearchBox';
import Box from '../../components/Box/BoxDefault';
/* Search Function */
const SearchView = ({ navigation }) => {
  return (
    <Box>
      <Box py={20}>
        <Logo color="red" />
      </Box>
      <Button title="Go Detail" onPress={() => navigation.navigate('Detail')} />
      <Box p={10}>
        <SearchBox />
      </Box>
    </Box>
  );
};

export default SearchView;

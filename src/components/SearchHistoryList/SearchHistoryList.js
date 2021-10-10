import React from 'react';
import { FlatList } from 'react-native';
import Box from '../Box/BoxDefault';
import Card, { CardTitle } from '../Card/Card';
import Text from '../Text';
import styles from './SearchHistoryList.style';
const SearchHistoryList = ({ data }) => {
  return (
    <FlatList
      style={styles.flatList}
      data={data}
      keyExtractor={item => item.id}
      renderItem={({ item }) => (
        <Box py={6}>
          <Card>
            <CardTitle>{item.title}</CardTitle>
          </Card>
        </Box>
      )}
      ListHeaderComponent={
        <Text color="textLight" mb={10}>
          Son Aramalar
        </Text>
      }
    />
  );
};

export default SearchHistoryList;

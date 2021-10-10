import React from 'react';
import { FlatList } from 'react-native';
/* components */
import Box from '../../components/Box/BoxDefault';
import ListHeaderComponent from '../../components/ListHeaderComponent';
import FocusAwareStatusBar from '../../utils/FocusAwareStatusBar';
/* styles */
import styles from './DetailView.style';
/* DATA */
import DATA from '../../@fake_db/db.json';
import DetailRenderItem from '../../components/DetailRenderItem';
const DetailView = () => {
  return (
    <Box bg="softRed" flex={1} px={16}>
      <FocusAwareStatusBar barStyle="light-content" backgroundColor="red" />
      {/* Content */}
      <Box flex={1}>
        <FlatList
          ListHeaderComponent={ListHeaderComponent}
          style={styles.bg}
          data={DATA}
          keyExtractor={item => item.id}
          ItemSeparatorComponent={() => <Box height={1} bg="light" />}
          renderItem={({ item, index }) => DetailRenderItem(item, index)}
        />
      </Box>
    </Box>
  );
};

export default DetailView;

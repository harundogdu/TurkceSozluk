import React, { useState } from 'react';
import { ActivityIndicator, FlatList } from 'react-native';
import axios from 'axios';
/* components */
import Box from '../../components/Box/BoxDefault';
import ListHeaderComponent from '../../components/ListHeaderComponent';
import FocusAwareStatusBar from '../../utils/FocusAwareStatusBar';
import DetailRenderItem from '../../components/DetailRenderItem';
/* styles */
import styles from './DetailView.style';
/* DATA */
import DATA from '../../@fake_db/db.json';
/* DetailView */
const DetailView = ({ route }) => {
  const { title } = route.params;
  const [interestData, setInteresetData] = useState([]);
  const [lastData, setLastData] = useState([]);

  const getDataFromAPI = async () => {
    const { data } = await axios.get(`https://sozluk.gov.tr/gts?ara=${title}`);
    setInteresetData(data);
  };
  React.useEffect(() => {
    getDataFromAPI();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  React.useEffect(() => {
    console.log(lastData);
  }, [lastData]);

  return (
    <Box bg="softRed" flex={1} px={16}>
      <FocusAwareStatusBar barStyle="light-content" backgroundColor="red" />
      {/* Content */}
      <Box flex={1}>
        <FlatList
          ListHeaderComponent={() => (
            <ListHeaderComponent title={title} lisan="sa" />
          )}
          style={styles.bg}
          data={DATA}
          keyExtractor={item => item.id}
          ItemSeparatorComponent={() => <Box height={1} bg="light" />}
          renderItem={DetailRenderItem}
        />
      </Box>
    </Box>
  );
};
export default DetailView;

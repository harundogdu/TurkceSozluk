import React, { useState } from 'react';
import SafeAreaView from 'react-native-safe-area-view';
import axios from 'axios';
/* components */
import Box from '../../components/Box/BoxDefault';
import SuggestionCard from '../../components/SuggestionCard/SuggestionCard';
import SearchHistoryList from '../../components/SearchHistoryList/SearchHistoryList';
import FocusAwareStatusBar from '../../utils/FocusAwareStatusBar';
import SearchHome from '../../components/SearchHome';
/* data */
import DATA from '../../@fake_db/db.json';
/* Search Function */
const SearchView = ({ navigation }) => {
  const [keyboardStatus, setKeyboardStatus] = useState(false);
  const [homeData, setHomeData] = useState(null);

  React.useEffect(() => {
    getDataFromAPI();
  }, []);

  const getDataFromAPI = async () => {
    const { data } = await axios.get('https://sozluk.gov.tr/icerik');
    setHomeData(data);
  };

  return (
    <Box as={SafeAreaView} bg={keyboardStatus ? 'softRed' : 'red'} flex={1}>
      {/* StatusBar */}
      <FocusAwareStatusBar barStyle="light-content" backgroundColor="red" />
      {/* Header */}
      <SearchHome
        keyboardStatus={keyboardStatus}
        setKeyboardStatus={setKeyboardStatus}
      />
      {/* Content */}
      <Box flex={1} pt={keyboardStatus ? 0 : 26} bg="softRed">
        {keyboardStatus ? (
          <Box flex={1}>
            <SearchHistoryList data={DATA} />
          </Box>
        ) : (
          <Box px={16} py={30} flex={1}>
            <SuggestionCard
              title="Bir Kelime"
              data={homeData?.kelime[0]}
              onPress={() =>
                navigation.navigate('Detail', {
                  title: homeData?.kelime[0].madde,
                })
              }
            />
            <SuggestionCard
              mt={30}
              title="Bir Deyim/Atasözü"
              data={homeData?.atasoz[0]}
              onPress={() =>
                navigation.navigate('Detail', {
                  title: homeData?.atasoz[0].madde,
                })
              }
            />
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default SearchView;

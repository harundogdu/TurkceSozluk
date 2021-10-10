import React, { useRef, useState } from 'react';
import SafeAreaView from 'react-native-safe-area-view';
import axios from 'axios';
/* react-native dependencies */
import { ActivityIndicator, FlatList, LogBox } from 'react-native';
import { Animated, ImageBackground } from 'react-native';
/* components */
import { Logo } from '../../components/icons';
import SearchBox from '../../components/SearchBox';
import Box from '../../components/Box/BoxDefault';
import FocusAwareStatusBar from '../../utils/FocusAwareStatusBar';
import Card, { CardSummary, CardTitle } from '../../components/Card/Card';
import Text from '../../components/Text';
/* styles */
import styles from './SearchView.style';
/* data */
import DATA from '../../@fake_db/db.json';
/* Search Function */
const SearchView = ({ navigation }) => {
  React.useEffect(() => {
    LogBox.ignoreLogs(['Animated: `useNativeDriver`']);
  }, []);
  const [keyboardStatus, setKeyboardStatus] = useState(false);
  const heroHeight = useRef(new Animated.Value(200)).current;
  const bgOpacity = useRef(new Animated.Value(1)).current;
  const [homeData, setHomeData] = useState(null);

  React.useEffect(() => {
    getDataFromAPI();
  }, []);

  React.useEffect(() => {
    Animated.timing(heroHeight, {
      toValue: keyboardStatus ? 84 : 200,
      duration: keyboardStatus ? 300 : 300,
    }).start();
    Animated.timing(bgOpacity, {
      toValue: keyboardStatus ? 0 : 1,
      duration: keyboardStatus ? 300 : 300,
    }).start();
  }, [keyboardStatus, heroHeight, bgOpacity]);

  const getDataFromAPI = async () => {
    const { data } = await axios.get(`https://sozluk.gov.tr/icerik`);
    setHomeData(data);
  };

  return (
    <Box as={SafeAreaView} bg={keyboardStatus ? 'softRed' : 'red'} flex={1}>
      {/* StatusBar */}
      <FocusAwareStatusBar barStyle="light-content" backgroundColor="red" />
      {/* Header */}
      <Box
        as={Animated.View}
        position="relative"
        zIndex={1}
        height={heroHeight}>
        {/* logo */}

        <Box as={Animated.View} style={{ opacity: bgOpacity }}>
          <Box
            as={ImageBackground}
            source={require('../../assets/images/bg.jpg')}
            style={styles.mainBG}
            alignItems="center"
            justifyContent="center">
            {/* Logo */}
            <Box flex={1} py={20} alignItems="center" justifyContent="center">
              <Logo color="white" />
            </Box>
          </Box>
        </Box>

        {/* Search Box */}
        <Box
          position="absolute"
          left={0}
          bottom={keyboardStatus ? 0 : -42}
          width="100%"
          p={16}>
          <SearchBox onChangeFocus={setKeyboardStatus} />
        </Box>
      </Box>
      {/* Content */}
      <Box flex={1} pt={keyboardStatus ? 0 : 26} bg="softRed">
        {keyboardStatus ? (
          <Box flex={1}>
            <FlatList
              style={{ padding: 16 }}
              data={DATA}
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
          </Box>
        ) : (
          <Box px={16} py={30} flex={1}>
            <Box>
              <Text mb={10}>Bir Kelime</Text>
              <Card
                onPress={() =>
                  navigation.navigate('Detail', { title: 'On Para' })
                }>
                {homeData ? (
                  <>
                    <CardTitle>{homeData?.kelime[0].madde}</CardTitle>
                    <CardSummary>{homeData?.kelime[0].anlam}</CardSummary>
                  </>
                ) : (
                  <ActivityIndicator />
                )}
              </Card>
            </Box>
            <Box mt={30}>
              <Text mb={10}>Bir Deyim - Atasözü</Text>
              <Card
                onPress={() =>
                  navigation.navigate('Detail', {
                    title: 'siyem siyem ağlamak',
                  })
                }>
                {homeData ? (
                  <>
                    <CardTitle>{homeData?.atasoz[0].madde}</CardTitle>
                    <CardSummary>{homeData?.atasoz[0].anlam}</CardSummary>
                  </>
                ) : (
                  <ActivityIndicator />
                )}
              </Card>
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default SearchView;

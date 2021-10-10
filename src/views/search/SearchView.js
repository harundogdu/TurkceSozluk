import React, { useRef, useState } from 'react';
import SafeAreaView from 'react-native-safe-area-view';
/* react-native dependencies */
import { FlatList, LogBox } from 'react-native';
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
const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

/* Search Function */
const SearchView = ({ navigation }) => {
  React.useEffect(() => {
    LogBox.ignoreLogs(['Animated: `useNativeDriver`']);
  }, []);
  const [keyboardStatus, setKeyboardStatus] = useState(false);
  const heroHeight = useRef(new Animated.Value(200)).current;
  const bgOpacity = useRef(new Animated.Value(1)).current;
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

        <Box as={Animated.View} opacity={bgOpacity}>
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
              <Text mb={10}>Bir Deyim</Text>
              <Card
                onPress={() =>
                  navigation.navigate('Detail', { title: 'On Para' })
                }>
                <CardTitle>on para</CardTitle>
                <CardSummary>çok az (para).</CardSummary>
              </Card>
            </Box>
            <Box mt={30}>
              <Text mb={10}>Bir deyim - Atasözü</Text>
              <Card
                onPress={() =>
                  navigation.navigate('Detail', {
                    title: 'siyem siyem ağlamak',
                  })
                }>
                <CardTitle>siyem siyem ağlamak</CardTitle>
                <CardSummary>
                  hafif hafif, ince ince, durmadan gözyaşı dökmek
                </CardSummary>
              </Card>
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default SearchView;

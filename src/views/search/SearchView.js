import React, { useRef, useState } from 'react';
import { Animated, ImageBackground, Text } from 'react-native';
import { Logo } from '../../components/icons';
import SearchBox from '../../components/SearchBox';
import Box from '../../components/Box/BoxDefault';
import styles from './SearchView.style';
import SafeAreaView from 'react-native-safe-area-view';
import FocusAwareStatusBar from '../../utils/FocusAwareStatusBar';
import { LogBox } from 'react-native';

/* Search Function */
const SearchView = () => {
  React.useEffect(() => {
    LogBox.ignoreLogs(['Animated: `useNativeDriver`']);
  }, []);
  const [keyboardStatus, setKeyboardStatus] = useState(false);
  const heroHeight = useRef(new Animated.Value(285)).current;
  React.useEffect(() => {
    Animated.timing(heroHeight, {
      toValue: keyboardStatus ? 84 : 285,
      duration: keyboardStatus ? 180 : 220,
    }).start();
  }, [keyboardStatus, heroHeight]);
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
        {!keyboardStatus && (
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
        )}
        {/* Search Box */}
        <Box
          position="absolute"
          left={0}
          bottom={keyboardStatus ? 0 : -42}
          width="100%"
          p={16}>
          <SearchBox onChangeFocus={status => setKeyboardStatus(status)} />
        </Box>
      </Box>
      {/* Content */}
      <Box flex={1} pt={keyboardStatus ? 0 : 26} bg="light">
        {keyboardStatus ? (
          <Box p={30} flex={1}>
            <Text>History</Text>
          </Box>
        ) : (
          <Box p={30} flex={1}>
            <Text>Öneri </Text>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default SearchView;

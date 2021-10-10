import React, { useRef } from 'react';
import { Animated, ImageBackground } from 'react-native';
import Box from '../Box/BoxDefault';
import { Logo } from '../icons';
import SearchBox from '../SearchBox';
import styles from './SearchHome.style';
const SearchHome = ({ keyboardStatus, setKeyboardStatus }) => {
  const heroHeight = useRef(new Animated.Value(200)).current;
  const bgOpacity = useRef(new Animated.Value(1)).current;
  React.useEffect(() => {
    Animated.timing(heroHeight, {
      toValue: keyboardStatus ? 84 : 200,
      duration: keyboardStatus ? 300 : 300,
      useNativeDriver: false,
    }).start();
    Animated.timing(bgOpacity, {
      toValue: keyboardStatus ? 0 : 1,
      duration: keyboardStatus ? 300 : 300,
      useNativeDriver: false,
    }).start();
  }, [keyboardStatus, heroHeight, bgOpacity]);
  return (
    <Box as={Animated.View} position="relative" zIndex={1} height={heroHeight}>
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
  );
};

export default SearchHome;

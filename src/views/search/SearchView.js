import React, { useState } from 'react';
import { ImageBackground, Text } from 'react-native';
import { Logo } from '../../components/icons';
import SearchBox from '../../components/SearchBox';
import Box from '../../components/Box/BoxDefault';
import styles from './SearchView.style';
import SafeAreaView from 'react-native-safe-area-view';
import FocusAwareStatusBar from '../../utils/FocusAwareStatusBar';
/* Search Function */
const SearchView = () => {
  const [keyboardStatus, setKeyboardStatus] = useState(false);
  return (
    <Box as={SafeAreaView} bg="red" flex={1}>
      {/* StatusBar */}
      <FocusAwareStatusBar barStyle="light-content" backgroundColor="red" />
      {/* Header */}
      <Box position="relative" zIndex={1} height={keyboardStatus ? 0 : 285}>
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
          {/* Search Box */}
          <Box width="100%" p={16} mb={-42}>
            <SearchBox onChangeFocus={status => setKeyboardStatus(status)} />
          </Box>
        </Box>
      </Box>
      {/* Conent */}
      <Box flex={1} pt={26} bg="light">
        <Box p={30} flex={1}>
          <Text>İçerik Alanı</Text>
        </Box>
      </Box>
    </Box>
  );
};

export default SearchView;
